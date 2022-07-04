https://www.youtube.com/watch?v=7neASrWEFEM 강의 참고

# float
![img.png](img.png)

# container 속성 값 들
![img_1.png](img_1.png)

# item 속성 값 들
![img_2.png](img_2.png)

![img_3.png](img_3.png)

![img_4.png](img_4.png)

# div 자동 생성
div.container>div.item.item${$}*10 입력하고 탭키를 누르면 아래와 같이 자동 생성

            <div className="container">
                <div className="item item1">1</div>
                <div className="item item2">2</div>
                <div className="item item3">3</div>
                <div className="item item4">4</div>
                <div className="item item5">5</div>
                <div className="item item6">6</div>
                <div className="item item7">7</div>
                <div className="item item8">8</div>
                <div className="item item9">9</div>
                <div className="item item10">10</div>
            </div>


# color 지정 사이트
https://www.material.io/design/color/the-color-system.html#tools-for-picking-colors

# container
### 기본
![img_5.png](img_5.png)

### display : flex ( 왼쪽 -> 오른쪽 )
![img_6.png](img_6.png)

display : flex ( 왼쪽 -> 오른쪽 ) 

### flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )
![img_7.png](img_7.png)

display : flex ( 왼쪽 -> 오른쪽 ) 

### flex-direction: row-reverse; 오른쪽에서 왼쪽
![img_8.png](img_8.png)

display : flex ( 왼쪽 -> 오른쪽 ) 

### flex-direction: column 위에서 아래로
![img_9.png](img_9.png)

display : flex ( 왼쪽 -> 오른쪽 )

### flex-direction: column-reverse; 아래에서 위로
![img_10.png](img_10.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

### flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)
![img_11.png](img_11.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

### flex-wrap: wrap; (item들이 화면 크기에 꽉 차게 되면 다음 라인으로 넘어 간다.)
![img_12.png](img_12.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

### flex-wrap: wrap-reverse; 거꾸로 표시
![img_13.png](img_13.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### flex-flow: column nowrap; 한꺼번에 지정 가능
![img_14.png](img_14.png)
display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: flex-start; 기본 ( item들 정렬 왼쪽에서 오른쪽으로 )
![img_15.png](img_15.png)
display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: flex-end; 기본 ( item들 정렬 오른쪽에서 왼쪽으로 item 순서는 그대로 )
![img_16.png](img_16.png)

display : flex ( 왼쪽 -> 오른쪽 )

### flex-direction: column 위에서 아래로

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: flex-end; 기본 ( item들 정렬 위에서 아래로 item 순서는 그대로 )
![img_17.png](img_17.png)
display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: center; ( item들 정렬이 가운데로 )

![img_18.png](img_18.png)
display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: space-around; ( item의 box 간격이 생김 : 가장 왼쪽 오른쪽은 얇다)
![img_19.png](img_19.png)
display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: space-evenly; ( item의 box 간격이 똑 같이)
![img_20.png](img_20.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

### justify-content: space-between; ( item의 가장 왼쪽 오른쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)
![img_21.png](img_21.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

justify-content: space-between; ( item의 가장 왼쪽 오른쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)  -->중심측 기준

### align-items: center; ( item들을 수직적으로 중심에 놓는다 ) --> 중심측 반대편 기준
![img_23.png](img_23.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

justify-content: space-between; ( item의 가장 왼쪽 오른쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)  -->중심측 기준

### align-items: baseline; ( 1번의 text 문자 위치 기준으로 정렬 )

![img_24.png](img_24.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

justify-content: space-between; ( item의 가장 왼쪽 오른쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)  -->중심측 기준

align-items: baseline; ( 1번의 text 문자 위치 기준으로 정렬 )

### align-content: space-between; ( item의 가장 위 아래쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)

![img_25.png](img_25.png)

display : flex ( 왼쪽 -> 오른쪽 )

flex-direction: row; 기본 ( 왼쪽에서 오른쪽 )

flex-wrap: nowrap; (item들이 아무리 많아도 한줄에 빼곡히 표시 된다.)

justify-content: space-between; ( item의 가장 왼쪽 오른쪽만 맞춰주고 나머지는 화면 중간으로 맞춰줌)  -->중심측 기준

align-items: baseline; ( 1번의 text 문자 위치 기준으로 정렬 )

### align-content: center; ( item들이 가운데 위치 )

![img_26.png](img_26.png)


## 브라우저별 지원 다름 ( 확인 필요 )

![img_27.png](img_27.png)

---

# item 속성

## order 지정
![img_28.png](img_28.png)

## flex-grow ( 선택한 것만 너비를 늘렸을 때 늘어 남 )
* 1번만 늘어 남

![img_29.png](img_29.png)
* 1번이 2,3번에 비해 2배로 늘어 남
![img_30.png](img_30.png)

## flex-shrink ( 선택한 것만 너비를 줄였을 때 늘어 남 )
![img_31.png](img_31.png)

## flex-basis (item들이 너비를 비율로 설정)
![img_32.png](img_32.png)

## align-self ( item1 만 정렬 할 수 있다. )
![img_33.png](img_33.png)

