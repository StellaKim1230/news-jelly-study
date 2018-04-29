# news-jelly-study

## 일정

* 3/13(화요일) : 화면 레이아웃 구성.
* 3/14(수요일) : 교통사고정보(accident) json으로 파싱한 데이터 적용해서 테이블 구현.
* 3/15(목요일) : 교통사고정보 데이터로 차트 구현 (bar chart, pie chart).
* 3/16(금요일): 대기현황정보(aircondition-o3, pm10). json 파일로 파싱한 데이터 적용해서 테이블, 차트 구현 및 스타일 적용.
* 3/17(토요일) : accident 데이타 변경시 테이블 변경
*              예) 테이블 시군구, 사고유형 데이타
* To Be : home 레이아웃 구현, accident와 aircondition 데이터 변경시 차트 반영

## 개발 작업 설계 내용
1. 메인 화면에 Home, Chart에 보여주는 ChartView 상위 컴포넌트 구현.
2. Chart 컴포넌트에 하위로 SideBar, Accident(교통사고), AirCondition(대기현황정보) 컴포넌트 구현.
3. Accident, AirCondition 컴포넌트 하위로 Chart(그래프), DataTable(테이블)컴포넌트 구현.
4. Accident Pie Chart는 월별 교통사고 사고건수 집계 표현.
5. Accident Bar Chart는 사고유형별 사고건수 집계 표현.
6. AirCondition Line Chart는 연도별 오존농도, 미세먼지농도 평균을 표현.
7. DataTable 컴포넌트 하위로 AccidentTableRow, AirConditionTableRow 컴포넌트 구현.
8. style은 scss로 적용.

## 개발 이슈 구체화 내용
* 공공 데이터 api를 적용하려 하였으나 요청횟수가 너무 작아 데이터 파일을 csv로 받아서 json파일로 파싱하여 사용.