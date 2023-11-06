(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{606:function(p,t,_){"use strict";_.r(t);var s=_(22),v=Object(s.a)({},(function(){var p=this,t=p.$createElement,_=p._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[_("p",[p._v("1、下载安装包")]),p._v(" "),_("p",[p._v("下载地址")]),p._v(" "),_("p",[p._v("https://www.enterprisedb.com/download-postgresql-binaries")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d798fb03.png",alt:"img"}})]),p._v(" "),_("p",[p._v("2、上传安装包到服务器上")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d79e6d9f.png",alt:"img"}})]),p._v(" "),_("p",[p._v("3、解压安装包")]),p._v(" "),_("p",[p._v("tar -xvzf postgresql-10.1-1-linux-x64-binaries.tar.gz")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7a3c764.png",alt:"img"}})]),p._v(" "),_("p",[p._v("解压出来之后目录为pgsql")]),p._v(" "),_("p",[p._v("4、移动解压文件到指定目录")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7a7660e.png",alt:"img"}})]),p._v(" "),_("p",[p._v("在opt目录下创建一个pgsql的文件夹，将刚才解压的文件复制到这个目录下")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7abb720.png",alt:"img"}})]),p._v(" "),_("p",[p._v("现在pgsql的安装目录就是/opt/pgsql/pgsql")]),p._v(" "),_("p",[p._v("5、创建pgsql用户并设置密码")]),p._v(" "),_("p",[p._v("[root@localhost pgsql]"),_("em",[p._v("# useradd postgres")]),p._v("[root@localhost pgsql]"),_("em",[p._v("# passwd postgres")])]),p._v(" "),_("p",[p._v("密码暂定123456")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7b03ba3.png",alt:"img"}})]),p._v(" "),_("p",[p._v("注意：这里设置密码是linux用户postgres的登录密码，不是pgsql服务器的密码。")]),p._v(" "),_("p",[p._v("6、创建数据目录")]),p._v(" "),_("p",[p._v("[root@localhost opt]"),_("em",[p._v("# mkdir pgsql_data")])]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7b991fe.png",alt:"img"}})]),p._v(" "),_("p",[p._v("8、然后切换到postgres用户来操作数据库，pgsql数据库就以postgres为默认用户。")]),p._v(" "),_("p",[p._v("[root@localhost opt]"),_("em",[p._v("# su - postgres")])]),p._v(" "),_("p",[p._v("9、配置环境变量，将pgsql的bin目录加至环境变量中，方便直接使用pgsql相关命令。")]),p._v(" "),_("p",[p._v("[postgres@localhost ~]$ vim /etc/profile")]),p._v(" "),_("p",[p._v("然后数据 i 进入编辑模式，在文件的最后一行加入pgsql的bin的目录")]),p._v(" "),_("p",[p._v("export PGDATA=/opt/pgsql/pgsql/bin")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7bd3be0.png",alt:"img"}})]),p._v(" "),_("p",[p._v("然后Esc，退出编辑模式")]),p._v(" "),_("p",[p._v(":wq "),_("em",[p._v("#")]),p._v(" "),_("em",[p._v("保存并退出")])]),p._v(" "),_("p",[p._v("如果出现下面的情况，说明当前用户没有权限，需要切换成root用户，然后再重新操作一遍即可。")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7c1853e.png",alt:"img"}})]),p._v(" "),_("p",[p._v("然后刷新文件")]),p._v(" "),_("p",[p._v("source /etc/profile")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7c4d71c.png",alt:"img"}})]),p._v(" "),_("p",[p._v("10、初始化数据库")]),p._v(" "),_("p",[p._v("先切换成postgres用户")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7c7dc97.png",alt:"img"}})]),p._v(" "),_("p",[p._v("我现在已经进入到了/opt/pgsql/pgsql 的目录下了")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7cb1091.png",alt:"img"}})]),p._v(" "),_("p",[p._v("然后执行初始化数据库的命令")]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql]$ bin/initdb -D /opt/pgsql_data/")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7d038ed.png",alt:"img"}})]),p._v(" "),_("p",[p._v("等待执行完毕，没什么问题就初始化成功了，会出现以上的提示，最后会出现这个命令，就是让你用这个命令就可以启动数据库了，下一步做启动的具体说明。")]),p._v(" "),_("p",[p._v("bin/pg_ctl -D /opt/pgsql_data/ -l logfile start")]),p._v(" "),_("p",[p._v("这里-l指定日志文件位置，这里直接输出当前目录下的logfile中，这个可以自己指定，这里-D指定数据目录，默认如果不加数据目录直接报错找不到，可以在环境变量配置文件中加入一行： export PGDATA=/opt/pgsql_data 然后source刷新即可，这样pgsql会自动去找PGDATA环境变量值，找不到才会报错。")]),p._v(" "),_("p",[p._v("11、启动数据库")]),p._v(" "),_("p",[p._v("bin/pg_ctl -D /opt/pgsql_data/ -l logfile start")]),p._v(" "),_("p",[p._v("启动的时候如果报下面这个错误，说明权限不够，")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7d4489c.png",alt:"img"}})]),p._v(" "),_("p",[p._v("执行这个命令进行赋权，注意要在root的用户下操作。")]),p._v(" "),_("p",[p._v("[root@localhost opt]"),_("em",[p._v("# chmod -R 777 pgsql")])]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7d7ca27.png",alt:"img"}})]),p._v(" "),_("p",[p._v("然后再次执行启动的命令，ok，数据库启动成功。")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7db2e2b.png",alt:"img"}})]),p._v(" "),_("p",[p._v("执行查看进程的命令查看")]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql]$ ps -ef | grep postgres")]),p._v(" "),_("p",[p._v("就可以看到相关进程如下：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7e0d71b.png",alt:"img"}})]),p._v(" "),_("p",[p._v("pgsql默认的端口号为5432，通过netstat命令或者lsof命令都可以看到监听情况：")]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql]$ lsof -i:5432")]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql]$ netstat -an | grep 5432")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7e4c1cb.png",alt:"img"}})]),p._v(" "),_("p",[p._v("现在可以看到pgsql默认监听的是localhost或127.0.0.1，目前只能本机访问，如果远程访问就连接不上了，具体的配置文件是data目录下的postgresql.conf，可以通过修改这个配置文件来调整各个参数，比如：listen_addresses可以修改绑定的地址，默认是localhost，port可以修改监听的端口号，默认是5432，max_connections可以修改最大客户端连接数量，默认是100等等。")]),p._v(" "),_("p",[p._v("停止postgresql的命令为：")]),p._v(" "),_("p",[p._v("/opt/pgsql/pgsql/bin/pg_ctl -D /opt/pgsql_data/ stop")]),p._v(" "),_("p",[p._v("12、配置远程连接的操作")]),p._v(" "),_("p",[p._v("使用命令")]),p._v(" "),_("p",[p._v("find / -name postgresql.conf")]),p._v(" "),_("p",[p._v("找到 postgresql.conf")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7e9d0af.png",alt:"img"}})]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7edc098.png",alt:"img"}})]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql_data]$ vim postgresql.conf")]),p._v(" "),_("p",[p._v("然后再数据命令")]),p._v(" "),_("p",[p._v("/listen_addresses")]),p._v(" "),_("p",[p._v("查找listen_addresses所在位置")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7f27e74.png",alt:"img"}})]),p._v(" "),_("p",[p._v("修改参数：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7f64a28.png",alt:"img"}})]),p._v(" "),_("p",[p._v("修改pg_hba.conf文件的内容：")]),p._v(" "),_("p",[p._v("[postgres@localhost pgsql_data]$ vim pg_hba.conf")]),p._v(" "),_("p",[p._v("可访问的用户ip段")]),p._v(" "),_("p",[p._v("在文件末尾加入：")]),p._v(" "),_("p",[p._v("host all all 0.0.0.0/0 md5")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7fa33a3.png",alt:"img"}})]),p._v(" "),_("p",[p._v("然后再重新启动数据库使之生效即可。")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d7fddb3c.png",alt:"img"}})]),p._v(" "),_("p",[p._v("停止postgresql的命令为：")]),p._v(" "),_("p",[p._v("/opt/pgsql/pgsql/bin/pg_ctl -D /opt/pgsql_data/ stop")]),p._v(" "),_("p",[p._v("启动postgresql的命令为：")]),p._v(" "),_("p",[p._v("/opt/pgsql/pgsql/bin/pg_ctl -D /opt/pgsql_data/ -l logfile start")]),p._v(" "),_("p",[p._v("查看进程")]),p._v(" "),_("p",[p._v("ps -ef | grep postgres")]),p._v(" "),_("p",[p._v("将端口添加到防火墙")]),p._v(" "),_("p",[p._v("firewall-cmd --permanent --add-port=5432/tcp")]),p._v(" "),_("p",[p._v("重启防火墙")]),p._v(" "),_("p",[p._v("systemctl restart firewalld")]),p._v(" "),_("p",[p._v("13、命令行界面简单操作")]),p._v(" "),_("p",[p._v("pgsql和mysql一样可以通过交互式提示符连接操作，连接方式如下：")]),p._v(" "),_("p",[p._v("/opt/pgsql/pgsql/bin/psql -h 127.0.0.1 -d postgres -U postgres -p 5432")]),p._v(" "),_("p",[p._v('其中-h参数指定服务器地址，默认为127.0.0.1，默认不指定即可，-d指定连接之后选中的数据库，默认也是postgres，-U指定用户，默认是当前用户，-p 指定端口号，默认是"5432"，其它更多的参数选项可以执行： ./bin/psql --help 查看')]),p._v(" "),_("p",[p._v("登录进去默认界面如下所示：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d802ae3a.png",alt:"img"}})]),p._v(" "),_("p",[p._v("命令提示符前面的就是当前的数据库，使用 \\l 查看当前的数据库列表")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d8069212.png",alt:"img"}})]),p._v(" "),_("p",[p._v("默认postgres，template0和1这3个库是不允许操作的，创建新的数据库执行：")]),p._v(" "),_("p",[p._v("CREATE DATABASE test WITH OWNER=postgres ENCODING='UTF-8';")]),p._v(" "),_("p",[p._v("这样就创建好了数据库test，然后可以执行命令:")]),p._v(" "),_("p",[p._v("\\c test")]),p._v(" "),_("p",[p._v("切换当前数据库为test，然后执行")]),p._v(" "),_("p",[p._v("\\d")]),p._v(" "),_("p",[p._v("可以查看当前数据库下的所有表：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d80b382f.png",alt:"img"}})]),p._v(" "),_("p",[p._v("创建一个简单的数据表可以执行下面的命令：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d80f2f36.png",alt:"img"}})]),p._v(" "),_("p",[p._v("创建表之后可以使用")]),p._v(" "),_("p",[p._v("\\d student;")]),p._v(" "),_("p",[p._v("查看表的详细信息，如下：")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d813f454.png",alt:"img"}})]),p._v(" "),_("p",[p._v("现在可以插入一条测试数据：")]),p._v(" "),_("p",[p._v("INSERT INTO student (id, name, number) VALUES (1, ‘张三’, ‘1023’);")]),p._v(" "),_("p",[p._v("然后可以查询这条数据：")]),p._v(" "),_("p",[p._v("SELECT * FROM student WHERE id=1;")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d817b50e.png",alt:"img"}})]),p._v(" "),_("p",[p._v("最后可以执行")]),p._v(" "),_("p",[p._v("\\q")]),p._v(" "),_("p",[p._v("退出交互式界面")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d81b3ff3.png",alt:"img"}})]),p._v(" "),_("p",[p._v("14、如果远程连接报错：")]),p._v(" "),_("p",[p._v("FATAL: password authentication failed for user “连接用户名”")]),p._v(" "),_("p",[p._v("解决方法")]),p._v(" "),_("p",[p._v("1、编辑pg_hba.conf,将md5认证修改成trust认证，编辑后退出保存")]),p._v(" "),_("p",[p._v("进入pgsql_data目录，然后编辑pg_hba.conf文件")]),p._v(" "),_("p",[p._v("2、执行pg_ctl reload加载生效，要进入bin目录下，再执行重新加载的命令")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d81e60b1.png",alt:"img"}})]),p._v(" "),_("p",[p._v("3、psql连接，用alter role修改密码")]),p._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b52d82304d5.png",alt:"img"}})]),p._v(" "),_("p",[p._v("4、退出psql")]),p._v(" "),_("p",[p._v("5、编辑pg_hba.conf,将turst认证修改成md5认证，编辑后退出保存")]),p._v(" "),_("p",[p._v("6、执行pg_ctl reload加载生效")]),p._v(" "),_("p",[p._v("postgresql生产环境数据库迁移")]),p._v(" "),_("p",[p._v("因为现有的pg环境负载过高，需要把现在的数据库迁移到新的环境中")]),p._v(" "),_("p",[p._v("如果数据量不大可以使用方法一")]),p._v(" "),_("p",[p._v("方法一：")]),p._v(" "),_("p",[p._v("pgsql迁移数据库到不同网段新的库，新的数据库环境主从高可用环境已经配置完成。")]),p._v(" "),_("p",[p._v("首先备份老的库")]),p._v(" "),_("p",[p._v("$ pg_dump -U peimsmdata -d peimsm  > peimsm.sql")]),p._v(" "),_("p",[p._v("压缩")]),p._v(" "),_("p",[p._v("$ tar -zcf peimsm.tar.gz peimsm.sql")]),p._v(" "),_("p",[p._v("把文件传到新的环境中，解压缩")]),p._v(" "),_("p",[p._v("$ tar -xzf peimsm.tar.gz")]),p._v(" "),_("p",[p._v("导入数据库")]),p._v(" "),_("p",[p._v("$ psql -U peimsmdata -d peimsm < peimsm.sql")]),p._v(" "),_("p",[p._v("但是实际上数据量有五六千万，五十多GB，使用上边的方法会很耗时，所以使用下面的方法")]),p._v(" "),_("p",[p._v("方法二：")]),p._v(" "),_("p",[p._v("新老环境在一个网段中")]),p._v(" "),_("p",[p._v("首先停止老的数据库相应的业务，然后停止数据库服务和keepalived服务")]),p._v(" "),_("p",[p._v("然后在主库环境中编译postgresql")]),p._v(" "),_("p",[p._v("使用下面命令清理pg_archive目录下的最新文件之前的归档文件")]),p._v(" "),_("p",[p._v("$ pg_archivecleanup ./ filename")]),p._v(" "),_("p",[p._v("把老环境中的/data/pg_data目录下的所有文件传送到新的环境中的/data/pg_data目录下，修改配置文件，启动服务")]),p._v(" "),_("p",[p._v("主从同步数据")]),p._v(" "),_("p",[p._v("...")]),p._v(" "),_("p",[p._v("依照主从配置的文档做配置等")]),p._v(" "),_("p",[p._v("参考")]),p._v(" "),_("p",[p._v("https://help.aliyun.com/document_detail/26157.html#h2-url-4")]),p._v(" "),_("p",[p._v("https://blog.csdn.net/qq_36408250/article/details/80652518")]),p._v(" "),_("p",[p._v("用管理员用户建库和创建普通用户")]),p._v(" "),_("p",[p._v("postgres=# create user xinjiang with password 'xinjiang';")]),p._v(" "),_("p",[p._v("postgres=# create database test01 owner xinjiang;")]),p._v(" "),_("p",[p._v("postgres=# grant all privileges on database test01 to xinjiang;")]),p._v(" "),_("p",[p._v("# psql -h 192.168.1.106 -p 5432 -U postgres -d postgres")]),p._v(" "),_("p",[p._v("postgres=# create user test02_user with password 'Test02@123';")]),p._v(" "),_("p",[p._v("postgres=# create database test02;")]),p._v(" "),_("p",[p._v("postgres=# grant all privileges on database test02 to test02_user;")]),p._v(" "),_("p",[p._v("可以看出，postgres作为数据库管理员，建库如果不指定owner，那么默认是postgres")]),p._v(" "),_("p",[_("strong",[p._v("PostgreSQL")]),p._v(" "),_("strong",[p._v("设置允许访问IP")])]),p._v(" "),_("p",[p._v("https://blog.csdn.net/wlchn/article/details/78915813")]),p._v(" "),_("p",[_("strong",[p._v("postgresql****数据库用户名密码验证失败")])]),p._v(" "),_("p",[p._v("https://blog.csdn.net/pg_hgdb/article/details/78805463")]),p._v(" "),_("p",[_("strong",[p._v("PostgreSQL****的访问控制（pg_hba.conf）")])]),p._v(" "),_("p",[p._v("https://my.oschina.net/liuyuanyuangogo/blog/497239")]),p._v(" "),_("p",[_("strong",[p._v("Postgresql")]),p._v(" "),_("strong",[p._v("远程连接配置")])]),p._v(" "),_("p",[p._v("https://www.cnblogs.com/3Tai/p/4935303.html")]),p._v(" "),_("p",[_("strong",[p._v("PostgreSQL****远程连接配置管理/账号密码分配")])]),p._v(" "),_("p",[p._v("https://yq.aliyun.com/articles/599287")])])}),[],!1,null,null,null);t.default=v.exports}}]);