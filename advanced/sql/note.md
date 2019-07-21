# sql

本地的MySQL可以包含多个数据库（database）,一个数据库（database）可以包含多张表（table）

对数据库的操作：
CREATE DATABASE - 创建新数据库
ALTER DATABASE - 修改数据库
SHOW DATABASES - 列出 MySQL 数据库管理系统的数据库列表
USE 数据库名 - 选择要操作的Mysql数据库，使用该命令后所有Mysql命令都只针对该数据库。

对表的操作：
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
SHOW TABLES - 显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库
SHOW COLUMNS FROM 数据表 - 显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息
