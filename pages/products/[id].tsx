import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import useUser from "@libs/client/useUser";
import Image from "next/image";

interface ProductWithUser extends Product {
    user: User;
}
interface ItemDetailResponse {
    ok: boolean;
    product: ProductWithUser;
    relatedProducts: Product[];
    isLiked: boolean;
}

const ItemDetail: NextPage = () => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const { mutate } = useSWRConfig();
    const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
        router.query.id ? `/api/products/${router.query.id}` : null
    );
    const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
    const onFavClick = () => {
        if (!data) return;

        // 1 : 화면 먼저 값을 변경
        /**
         * mutation의 첫번째 arg는 업데이트 될 캐쉬 데이터
         * 두번쨰 인자는 캐쉬 업데이트 후 백엔드에 요청을 통해 검증하는 용도로 default: true
         */
        boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);

        // 2 : 다른 캐시의 내용도 바꿀 수 있다. --> 아래 와 같이 하면 유저 정보 상태가 ok 아니므로 로그인 페이지로 가게 된다.
        // mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);

        // 3 : 실제 DB에 값을 바꾼다.. ( 왜 느리지? )
        toggleFav({});

        // ?? 1번을 안 하고 3번 후 리프레쉬는 안 되나? --> 느려서 이렇게 한 걸끼?

    };
    return (
        <Layout canGoBack seoTitle="Product Detail">
            <div className="px-4  py-4">
                <div className="mb-8">
                    <div className="h-96 bg-slate-300" />
                    <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-slate-300" />
                        <div>
                            <p className="text-sm font-medium text-gray-700">
                                {data?.product?.user?.name}
                            </p>
                            <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                                <a className="text-xs font-medium text-gray-500">
                                    View profile &rarr;
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {data?.product?.name}
                        </h1>
                        <span className="text-2xl block mt-3 text-gray-900">
              ${data?.product?.price}
            </span>
                        <p className=" my-6 text-gray-700">{data?.product?.description}</p>
                        <div className="flex items-center justify-between space-x-2">
                            <Button large text="Talk to seller" />
                            <button
                                onClick={onFavClick}
                                className={cls(
                                    "p-3 rounded-md flex items-center hover:bg-gray-100 justify-center ",
                                    data?.isLiked
                                        ? "text-red-500  hover:text-red-600"
                                        : "text-gray-400  hover:text-gray-500"
                                )}
                            >
                                {data?.isLiked ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6 "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
                    <div className=" mt-6 grid grid-cols-2 gap-4">
                        {data?.relatedProducts?.map((product) => (
                            <div key={product.id}>
                                <div className="h-56 w-full mb-4 bg-slate-300" />
                                <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                                <span className="text-sm font-medium text-gray-900">
                  ${product.price}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;
