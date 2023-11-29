# **스타트업을 위한 계층화 아키텍처 기반 최저비용 클라우드 아키텍처 연구**

## 저자
- [이민재](https://github.com/mimijae), [오민규](https://github.com/kormk) 



## **1. 연구배경**
1. IT업계가 호황을 맞으며 유니콘기업을 꿈꾸며 스타트업에 뛰어드는 추세
2. 클라우드 서비스는 비용, 성능, 확장성, 가용성, 보안등의 이점으로 가히 필수적임
3. 스타트업은 자본과 인력, 시간이 한정적
4. 자신의 서비스에 알맞은 클라우드 아키텍처를 선정하는 것이 어려움
5. 물리적으로 계층을 구분지은 1계층, 3계층 아키텍처의 비교를 통해 스타트업에게 알맞은
아키텍처를 연구

## **2. 테스트 방법**
- **테스트 툴**: LoadRunner
- **성능 비교**: Throughput, Hits per Second, Transaction Performance, HTTP Responses per Second를 비교하여 성능을 분석
- **시나리오**
<p float="left">
  <img src="static/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A41.png" width="420" />
  <img src="static/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A42.png" width="420" /> 
</p>
<p float="left">
  <img src="static/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A43.png" width="420" />
  <img src="static/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A44.png" width="420" />
</p>


### 기술스택

|   WEB    |   WAS    |    DB    |   Cloud   |     OS     |
|:--------:|:--------:|:--------:|:---------:|:----------:|
| ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Spring Boot](https://img.shields.io/badge/-SpringBoot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) | ![NCP](https://img.shields.io/badge/-NCP-03C75A?style=for-the-badge&logo=naver&logoColor=white) | ![Ubuntu](https://img.shields.io/badge/-Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Docker (WAS)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   |   |   |
| ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) |   |   |   |   |
| ![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white) |   |   |   |   |
| ![Docker (WEB)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   |   |   |   |

### 서버 스펙
![Alt text](static/%EC%84%9C%EB%B2%84%EC%82%AC%EC%96%91.png)


## **3. 테스트 분석**
### 📌저 트래픽, 저 데이터 처리
#### Hits per Second
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%841.png)
#### Throughput
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%842.png)
#### Transaction Summary
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%843.png)

#### 수치 통계
| Metrics            | 1tier-test-1 | 3-tier-test-1 |
|--------------------|--------------|---------------|
| Max Users          | 10           | 10            |
| Total Throughput   | 120,840,594  | 280,243,936   |
| Average Throughput | 398,814      | 924,897       |
| Total Hits         | 15,450       | 41,593        |
| Average Hits       | 50.99        | 137.271       |
| Total Errors       | 1            | 7             |

이 분석 결과는 전체적으로, 3-tier 테스트는 높은 성능을 보이지만 불안정성도 크며, 더 높은 부하 처리 능력과 함께 변동성이 더 크다는 것을 의미합니다. 반면, 1-tier 테스트는 성능은 낮지만 일관성이 더 높습니다.

데이터는 각 테스트의 최소, 평균, 최대, 중앙값, 표준 편차를 보여주며, 3-tier가 1-tier보다 평균적으로 두 배 이상의 처리량을 달성했지만, 변동성도 더 크다는 것을 나타냅니다. 또한, 그래프 추세는 1-tier가 안정적인 처리량을 유지하는 반면, 3-tier는 성능이 특정 조건에서 급격히 변할 수 있음을 보여줍니다.

3-tier 테스트는 더 많은 트랜잭션을 처리하고 평균 응답 시간이 더 짧았으며, 성능이 더 안정적이지만, 실패한 트랜잭션 수도 더 많았습니다. 이는 더 높은 부하 처리 능력과 빠른 성능을 제공하지만, 더 높은 오류율을 가질 수 있음을 의미합니다.

최종적으로, 두 테스트는 동일한 최대 사용자 수를 가지고 있지만, 3-tier는 더 높은 처리량과 히트 수를 기록했고, 더 많은 오류를 발생시켰습니다.

### 📌저 트래픽, 고 데이터 처리
#### Hits per Second
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%845.png)
#### Throughput
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%846.png)
#### Transaction Summary
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%847.png)

#### 수치 통계
| Metrics            | 1tier-test-2 | 3tier-test-2 |
|--------------------|--------------|--------------|
| Max Users          | 10           | 10           |
| Total Throughput   | 711,456,945  | 769,669,276  |
| Average Throughput | 2,309,925    | 2,482,804    |
| Total Hits         | 1,410        | 1,778        |
| Average Hits       | 4.578        | 5.735        |
| Total Errors       | 0            | 0            |

이 분석은 전체적으로, '3tier-test-2.lrr' 시나리오가 평균적으로 더 높은 히트 수를 기록하며, 히트 수의 분포가 더 균일하다는 것을 낮은 표준 편차가 보여줍니다. 이는 '3tier-test-2.lrr'가 서버 요청을 더 일관되게 잘 처리할 수 있음을 나타냅니다.

두 시나리오 모두 최대 히트 수는 같지만, '3tier-test-2.lrr'는 평균 처리량이 더 높고 표준 편차가 낮습니다, 이는 이 시나리오가 일관되게 더 많은 데이터를 처리할 수 있음을 의미합니다. 그러나 두 시나리오 모두 시간이 지남에 따라 처리량에 변동이 있는 것으로 보여, 추가적인 안정화 조치가 필요할 수 있습니다.

응답 시간 측면에서, 두 시나리오는 모든 트랜잭션을 성공적으로 처리했으나, '1tier-test-2'는 '3tier-test-2'보다 빠른 최소 응답 시간을 보였습니다. 반면, 평균 응답 시간은 '3tier-test-2'가 약간 낮았고, 최대 응답 시간은 '3tier-test-2'가 더 높았습니다. 이는 '3tier-test-2'에서 일부 트랜잭션이 더 오래 걸렸음을 나타내며, '3tier-test-2'의 표준 편차가 더 높아 응답 시간의 변동성이 더 큼을 의미합니다.

종합적으로, '3tier-test-2'는 '1tier-test-2'보다 더 높은 처리량과 히트 수를 기록했습니다. 이는 3-티어 시스템이 1-티어 시스템보다 더 높은 성능을 낼 수 있음을 나타냅니다. 평균 처리량과 히트 수가 더 높은 것은 '3tier-test-2'가 더 높은 효율성을 가질 수 있음을 시사합니다.


### 📌고 트래픽, 저 데이터 처리
#### Hits per Second
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%848.png)
#### Throughput
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%849.png)
#### Transaction Summary
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%8410.png)

#### 수치 통계
| Metrics            | 1tier-test-3-1 | 3tier-test-3 |
|--------------------|----------------|--------------|
| Max Users          | 50             | 50           |
| Total Throughput   | 159,793,137    | 349,496,012  |
| Average Throughput | 418,307        | 869,393      |
| Total Hits         | 20,430         | 51,864       |
| Average Hits       | 53.482         | 129.015      |
| Total Errors       | 1              | 5            |

이 분석 결과는 '3tier-test-3.lrr'는 '1tier-test-3-1.lrr'보다 훨씬 더 많은 히트 수를 처리할 수 있으며, 더 큰 표준 편차를 가지고 있어 히트 수의 변동성이 더 큰 것으로 나타납니다. 또한, '3tier-test-3.lrr'는 평균적으로 두 배 이상의 처리량을 기록하며, 최대 처리량도 더 높습니다. 그러나 그래프의 끝부분에서 급격한 감소가 나타나, 데이터 수집 종료나 시스템 문제를 시사할 수 있습니다.

'3tier-test-3'는 '1tier-test-3-1'보다 더 많은 트랜잭션을 처리하며, 평균 응답 시간과 90% 완료 시간이 더 짧습니다, 이는 더 높은 처리량과 빠른 응답성을 가진다는 것을 의미합니다. 그러나 '3tier-test-3'에서 더 많은 트랜잭션이 실패했고, 표준 편차가 낮아 응답 시간이 더 일관적임을 나타냅니다.

총처리량과 평균 처리량 측면에서, '3tier-test-3'는 '1tier-test-3-1'보다 더 높은 수치를 기록했으며, 더 많은 히트 수를 보였습니다. 이는 3-tier 시스템이 1-tier 시스템보다 더 높은 부하에서 더 높은 처리 능력을 가질 수 있음을 나타냅니다. 

### 📌고 트래픽, 고 데이터 처리
#### Hits per Second
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%8411.png)
#### Throughput
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%8412.png)
#### Transaction Summary
![Alt text](static/%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B6%84%EC%84%9D%EC%82%AC%EC%A7%8413.png)

#### 수치 통계
| Metrics            | 1tier-test-4 | 3tier-test-4 |
|--------------------|--------------|--------------|
| Max Users          | 50           | 50           |
| Total Throughput   | 881,271,118  | 999,657,566  |
| Average Throughput | 2,175,978    | 2,450,141    |
| Total Hits         | 2,795        | 3,323        |
| Average Hits       | 6.901        | 8.145        |
| Total Errors       | 211          | 170          |


이 분석은 '3tier-test-4.lrr'는 '1tier-test-4.lrr'보다 더 높은 평균과 최대 히트 수를 보이며, 표준 편차가 약간 낮아 요청 처리의 균일성이 더 높을 수 있음을 시사합니다. 이는 3-tier 구성이 1-tier 구성보다 더 많은 요청을 처리할 수 있음을 나타냅니다. 그러나 두 시나리오 모두 시간에 따라 히트 수에 변동성이 있습니다.

처리량 측면에서, '3tier-test-4.lrr'는 평균적으로 더 높은 처리량을 보이지만, '1tier-test-4.lrr'는 최대 처리량에서 더 높은 값을 나타냅니다. '1tier-test-4.lrr'의 표준 편차가 더 높아, 처리량의 변동성이 '3tier-test-4.lrr'보다 큼을 의미합니다.

트랜잭션 처리 측면에서, '3tier-test-4'는 '1tier-test-4'보다 더 많은 트랜잭션을 성공적으로 처리했으며, 실패한 트랜잭션 수도 더 적습니다. 평균 응답 시간과 최대 응답 시간은 비슷하지만, '3tier-test-4'가 약간 더 짧으며, 더 낮은 표준 편차를 가지고 있어 응답 시간의 일관성이 '1tier-test-4'보다 더 높습니다.

종합적으로, '3tier-test-4'는 '1tier-test-4'보다 더 높은 총 처리량과 평균 처리량을 기록했으며, 더 많은 히트 수와 낮은 오류 수를 가집니다. 이는 3-tier 시스템이 1-tier 시스템보다 더 높은 성능과 효율성을 나타내며, 더 안정적으로 운영될 수 있음을 나타냅니다. 



## **4. 결론 및 제언**
[결론]
- 모든 테스트에서 3계층 구조가 더 높은 성능과 안정성을 보여, 성능적인 측면에서 3계층이 1계층보다 뛰어난 것은 명백하다.
- 하지만 본 논문의 주 목적은 저렴한 예산으로 구성할 수 있는 Cloud 아키텍처의 성능을 측정하고, 성능과 비용 사이의 적절한 합의점을
찾는 것이다.

[제언]
- 빠른 사업 시작을 위한 경우, 1계층 아키텍처가 빠르게 환경을 구축하고 관리하기 편리하여 적합하다. 하지만 지속적인 성장을 감당하기
어려우므로 서비스 분리를 준비해야 한다.
- 소규모 인원이 내부적으로 사용하는 경우, 트래픽이 일정하여 고성능 서버가 필요 없을 수 있으므로, 비용적인 측면에서 1계층 아키텍처
채택이 현명하다.
- 다중 계층 아키텍처를 무차별적으로 도입하는 것은 성능은 보장되지만 비용적인 부담이 발생할 수 있으므로, 서비스 규모를 파악하고 적
절한 아키텍처를 적용하는 것이 바람직하다.


