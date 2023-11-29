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
- **성능 비교**: Throughput, Hits per Second ,Transction Performance, HTTP Responses per Second 의 성능을 비교 분석

## **3. 결론 및 제언**
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

## 기술스택

|   WEB    |   WAS    |    DB    |   Cloud   |     OS     |
|:--------:|:--------:|:--------:|:---------:|:----------:|
| ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Spring Boot](https://img.shields.io/badge/-SpringBoot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) | ![NCP](https://img.shields.io/badge/-NCP-03C75A?style=for-the-badge&logo=naver&logoColor=white) | ![Ubuntu](https://img.shields.io/badge/-Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Docker (WAS)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   |   |   |
| ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) |   |   |   |   |
| ![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white) |   |   |   |   |
| ![Docker (WEB)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   |   |   |   |


## web Ubuntu 서버 베포

### Ubuntu
1. 시스템의 패키지 리스트를 최신 상태로 업데이트:
```bash
sudo apt-get update
```

2. 시스템에 설치된 이전 Docker 버전들을 제거 (만약 설치되어 있다면):
```bash
sudo apt-get remove docker docker-engine docker.io
```

3. Docker를 설치:
```bash
sudo apt install docker.io
```

4. Docker 서비스를 시작:
```bash
sudo systemctl start docker
```

5. 부팅 시 Docker가 자동으로 시작되도록 설정:
```bash
sudo systemctl enable docker
```

6. 설치된 Docker의 버전을 확인:
```bash
docker --version
```

7. docker-compose 설치:
```bash
sudo apt install docker-compose
```

### Dokcer
**도커 이미지를 빌드**
```bash
sudo docker-compose build
```
**컨테이너 run**

```bash
sudo docker-compose up -d
```

도커 이미지빌드후 컨테이너 run
```bash
sudo docker-compose up -d --build
```

**현재 실행 중인 도커 컨테이너를 내림**

```bash
sudo docker-compose down
```

### **프론트서버 gunicorn을 사용해 정적파일 관리**
```bash
sudo docker-compose exec web python manage.py collectstatic
```

```bash
sudo docker-compose exec web python manage.py collectstatic --noinput
```

```bash
sudo docker-compose restart nginx
```


