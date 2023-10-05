# **저예산 고성능 클라우드 아키텍처: 스타트업을 위한 최적화 전략**
## [IaaS 3-tier architecture와 PaaS 성능 비교]
## **1. 주요 개요**
- **비용 효율성**: 클라우드 환경에서의 고성능과 저비용을 동시에 추구하는 것이 필요하다.
- **분산 파일 시스템**: 높은 성능을 제공하면서 비용을 절감할 수 있는 기술 적용이 중요하다.
- **스타트업의 필요성**: 클라우드 환경에서 스타트업이 필요로 하는 기능의 설계와 구축에 중점을 둔다.

## **2. 테스트 방법**
- **3계층구조 와 PaaS서버 부하**: 다양한 시나리오에서의 서버 부하를 테스트한다.
- **성능 비교**: 다양한 지표(디비성능, 서버성능, 관리 및 유지 비용, 확장성, 보안 등)를 기반으로 성능을 비교 분석한다.

## **3. 클라우드 서비스 이해**
- **장단점**: 스타트업에서 최적의 성능을 위해 클라우드 서비스의 특징과 장단점을 깊게 파악한다.

## 기술스택
|   WEB    |   WAS    |    DB    |   Server   |
|:--------:|:--------:|:--------:|:----------:|
| ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Spring Boot](https://img.shields.io/badge/-SpringBoot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) | ![NCP](https://img.shields.io/badge/-NCP-03C75A?style=for-the-badge&logo=naver&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Docker (WAS)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   | ![Ubuntu](https://img.shields.io/badge/-Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) |
| ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) |   |   |   |
| ![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white) |   |   |   |
| ![Docker (WEB)](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |   |   |   |

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


