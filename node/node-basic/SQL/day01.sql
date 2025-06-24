-- 단문 주석
/*
	복문 주석
    DB => SQL (Structured Query Language) => 표준
*/ 

use eduDB;
desc members;
select * from members;
-- 데이터 삽입 : insert 문

/* 
DDL : CREATE, DROP, ALTER
DML (Data Manipulation L) : INSERT, DELETE, UPDATE
DQL (DATA QUERY L) : SELECT
insert into 테이블명(컬럼명1, 컬럼명2,...)
values (값1, 값2, ...)
varchar, char, text, ... 홑따옴표로 감싸서 값을 넣는다 '값'
*/
insert into members(name, email, passwd)
values('홍길동', '111', 'hong@a.b.c');
-- TCL (Transaction Control L) mysql은 auto commit 설정이 되어 있음
commit; -- 메모리에 보관하던 데이터를 DB에 영구히 저장
rollback; -- 이전에 하던 작업을 취소

-- 데이터 조회 : select문
/*
	select 컬럼1, 컬럼2, ... from 테이블명
    [where 조건]
*/
select id, name, email, indate, passwd, refreshtoken from members;
select * from members;
-- 3명 가입시키기
-- 김관리 admin2@a.b.c ADMIN
-- 나머지는 일반 USER

insert into members(name, email, passwd)
values('전우진', "toon@gmail.com", 1234);

insert into members(name, email, passwd, role)
values('리아팍', "park@gmail.com", 1234, 'USER'), ('승욘리', 'admin@b.b.c', 1234, 'ADMIN'),('보겸정', 'jung@c.b.c', '4321', 'USER');

select * from members;
-- 일반 회원(USER)들만 모아서 보여주세요alter
select * from members
where role = 'ADMIN';
-- 회원번호가 2번인 회원의 ID, NAME, INDATE를 보여주세요
select id, name, indate from members
where id = 2;
-- 이름이 홍길동인 회원 정보 보여주세요
select * from members where name = '홍길동';
-- 이름에 김씨 성을 가진 회원정보 보여주세요
-- like절을 이용
select * from members where name like '김%';
select * from members where name like '%진';
select * from members where name like '%우%';
-- email에 com자를 가진 회원 정보 보여주세요alter
select * from members where email like '%com%';
-- 이름에 김자가 들어가고 role이 ADMIN인 회원 정보를 보여주세요
select * from members where name like '%김%' and role='admin';
-- 이름에 김자가 들어가거나 role이 ADMIN인 회원 정보를 보여주세요
select *from members where name like '%우%' or role='admin';

-- 정렬, 제한
-- 회원의 이름 가나다순으로 보여주세요
-- order by 컬럼명 asc (오름추순) | desc(내림차순)
select id, name, role from members order by name desc;
-- role 오름차순으로 정렬하고, 같은 role일 경우 등록일(indate) 내림차순으로 
-- 회원정보를 보여주세요
select * from members order by role asc, indate desc;

-- 이메일에 .com이 포함된 회원들을 보여주되 등록일 내림차순으로 보여주세요
-- WGHO
-- where > group by > having > order by
select * from members where email like '%com%' order by indate desc; 

-- 가장 오래전에 등록한 회원 2명만 보여주세요
select id, name, indate from members
order by indate asc limit 2;

-- 집계 함수alter
-- 전체 회원수를 보여주세요
select count(id) from members; -- 권장 
select count(*) from members; -- 모든 행의 조합을 카운팅함
select count(refreshtoken) from members; 
-- null값을 가지면 카운트 하지 않는다
-- 일반 USER가 몇명인지 보여주세요

-- DML (INSERT, UPDATE, DELETE)
/*
UPDATE 테이블명 SET 컬럼1=값1, 컬럼2=값2
[WHERE 조건]
*/
select * from members;
update members
set name ='김마에', email='matser@a.b.c', passwd=222 where id=6;
select * from members;
-- 5번 이메일의 값을 'hong@a.b.c'로 수정 ==> 에러
use eduDB;
update members set email = 'hong@a.b.c'
where name='보겸정';


-- delete 문
/*
	delete from 테이블; => 모든 레코드가 삭제됨alter
    delete from 테이블 where 조건;
*/
delete from members where id=3;
select * from members;
-- posts 테이블 생성문장 작성하세요
-- drop table 테이블명
drop table if exists posts;
create table if not exists posts(
id int primary key auto_increment, -- 글번호
writer varchar(100) not null, -- 작성자
title varchar(200) not null, -- 글제목
content text, -- 글내용
attach varchar(255), -- 첨부파일명
wdate datetime default current_timestamp, -- 작성일 
foreign key (writer) references members(email)
on delete cascade
-- 회원정보를 삭제하면 게시글도 같이 삭제되는 옵션 on delete cascade
);

-- posts에 글쓰기 하세요
insert into posts(writer, title, content)
values('admin@a.b.c', '공지사항1', '공지합니다.'),
('dowoo@c.b.c', 'sql 정리', 'sql 잘 하는 법 알려드립니다.'),
('park@gmail.com', 'db 정복하는 공략집 뿌려요', 'db 그렇게 어렵지 않습니다');
select * from posts;
-- 게시글 목록 (작성자 이름도 포함)
-- posts(writer-이메일), members(name)
-- FK ---UK 
-- 2개 이상의 테이블을 합쳐서 1개의 테이블 처럼 보여줄 수 있다
-- join문 사용
/*
	select a.컬럼1, a.컬럼2, b.컴럼1, b.컬럼2
    from 테이블1 a(별칭)
    join 테이블2 b
    on a.pk = b.fk
*/

select m.name, m.email, p.writer, p.title, wdate, p.id as '글번호'
from members m join posts p
on m.email = p.writer
order by p.id desc;

select count(id) from members;

select distinct writer from posts;
-- distinct : 중복된 데이터가 있으면 한 번만 출력

-- 전체 게시글 수를 구해 출력하세요
select count(id) from posts;

-- 회원별 게시글 수를 구해 출력하세요
-- select 그룹함수 * from group by 컬럼명
-- 그룹함수 : count(), max(), min(), sum(), avg() ...
-- group by에 의해 select할 수 있는 컬럼은 group by절에
-- 사용된 컬럼만 가져올 수 있다 + 그룹함수

select writer, count(id) from posts group by writer;

-- 게시글수가 3개 이상되는 통계치만 보여줘
-- group by절에 조건을 부여할 때는 having 절을 이용
select writer, count(id) 
from posts 
group by writer
having count(id) >=3;
-- WGHO

use eduDB;
select * from posts order by id desc;
select id, title, content, writer, attach, date_format(wdate, "%-Y-%m-%d")
from posts order by id desc;

select id, title, content, writer, attach as file
from posts order by id desc limit 3 offset 0;

use eduDB;
select * from members order by id desc;
delete from members where id < 6;
select id from members where email="toondra@gmail.com"