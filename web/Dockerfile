# 빌드 스테이지는 필요 없습니다.

# 프로덕션 스테이지
FROM nginx:alpine
COPY ./ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
