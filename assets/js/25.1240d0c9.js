(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{519:function(e,s,a){"use strict";a.r(s);var n=a(22),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"php5-6源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php5-6源码安装"}},[e._v("#")]),e._v(" php5.6源码安装")]),e._v(" "),a("p",[e._v("yum install -y epel-release")]),e._v(" "),a("p",[e._v("yum install -y bzip2 bzip2-devel libpng libpng-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libmcrypt-devel libxml2-devel openssl openssl-devel curl-devel openldap openldap-devel libmcrypt-devel libmcrypt")]),e._v(" "),a("p",[e._v("./configure --prefix=/opt/php --with-config-file-path=/opt/php/etc  --enable-fpm  --with-fpm-user=www --with-fpm-group=www --with-mysql --with-mysql-sock=/var/lib/mysql/mysql.sock --with-php-config=/www/php/bin/php-config --with-mysqli --with-libxml-dir  --with-bz2 --with-gd --with-jpeg-dir --with-png-dir --with-freetype-dir --with-iconv-dir --with-zlib-dir --with-mcrypt --enable-soap --enable-gd-native-ttf --enable-ftp --enable-mbstring --enable-exif --disable-ipv6 --with-curl --enable-bcmath --enable-sockets --with-iconv-dir=/usr/local --enable-xml --enable-dom  --enable-calendar --with-gettext --with-pdo-mysql=mysqlnd --disable-fileinfo --with-ldap=shared --with-apxs2=/usr/bin/apxs")]),e._v(" "),a("p",[e._v("./configure --prefix=/opt/php --with-config-file-path=/opt/php/etc  --enable-fpm  --with-fpm-user=www --with-fpm-group=www --with-php-config=/opt/php/bin/php-config --with-mysqli --with-libxml-dir  --with-bz2 --with-gd --with-jpeg-dir --with-png-dir --with-freetype-dir --with-iconv-dir --with-zlib-dir --with-mcrypt --enable-soap --enable-gd-native-ttf --enable-ftp --enable-mbstring --enable-exif --disable-ipv6 --with-curl --enable-bcmath --enable-sockets --with-iconv-dir=/usr/local --enable-xml --enable-dom  --enable-calendar --with-gettext --with-pdo-mysql=mysqlnd --disable-fileinfo --with-ldap=shared")]),e._v(" "),a("p",[e._v("这里会报一个错，需要拷贝libldap到/usr/lib下\ncp -frp /usr/lib64/libldap* /usr/lib/")]),e._v(" "),a("p",[e._v("make && make install")]),e._v(" "),a("p",[e._v("拷贝启动脚本：\ncp php.ini-production /opt/php/etc/php.ini "),a("br"),e._v("\ncp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm "),a("br"),e._v("\ncp /opt/php/etc/php-fpm.conf.default  /opt/php/etc/php-fpm.conf "),a("br"),e._v("\nchmod 755 /etc/init.d/php-fpm "),a("br"),e._v("\nchkconfig --add php-fpm "),a("br"),e._v("\nchkconfig php-fpm on\nservice php-fpm start\n如果报错，需要创建用户php-fpm和组(或者更改启动php的用户)\ngroupadd php-fpm\nuseradd -g php-fpm -s /sbin/nologin php-fpm")]),e._v(" "),a("p",[e._v("修改php.ini参数：（zabbix环境需要修改的参数）\nmax_execution_time = 300 memory_limit = 128M post_max_size = 16M upload_max_filesize = 2M max_input_time = 300 date.timezone = Asia/Shanghai\nalways_populate_raw_post_data = -1")]),e._v(" "),a("p",[e._v("yum install httpd-devel.x86_64 -y\napache 加个参数\n--with-apxs2=/usr/local/apache/bin/apxs\n--with-mysql=/usr/local/mysql")]),e._v(" "),a("p",[e._v("添加到httpd.conf\nAddType application/x-httpd-php-source .phps\nAddType application/x-httpd-php .php\nLoadModule php5_module modules/libphp5.so")]),e._v(" "),a("p",[e._v("LoadModule php5_module modules/libphp5.so")]),e._v(" "),a("p",[e._v("cp php.ini-production /usr/local/php/lib/php.ini\n正式配置文件一般关闭显示log")]),e._v(" "),a("p",[e._v("make ZEND_EXTRA_LIBS='-liconv'")]),e._v(" "),a("p",[e._v("ln -s /usr/local/lib/libiconv.so.2 /usr/lib64/")]),e._v(" "),a("p",[e._v("查看安装参数\nphp -i|grep confi")]),e._v(" "),a("p",[e._v("php编译安装参数详解")]),e._v(" "),a("p",[e._v("./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php/etc --with-mysql=/usr/local/mysql --with-mysqli=/usr/bin/mysql_config --with-iconv-dir=/usr/local --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-discard-path --enable-safe-mode --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --with-curlwrappers --enable-mbregex --enable-fastcgi --enable-fpm --enable-force-cgi-redirect --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-ldap --with-ldap-sasl --with-xmlrpc --enable-zip --enable-soap --without-pear --with-zlib --enable-pdo --with-pdo-mysql --with-mysql")]),e._v(" "),a("p",[e._v("#mysqli扩展技术不仅可以调用MySQL的存储过程、处理MySQL事务，而且还可以使访问数据库工作变得更加稳定。\nmake ZEND_EXTRA_LIBS='-liconv'\nmake install")]),e._v(" "),a("p",[e._v("--prefix=/usr/local/php")]),e._v(" "),a("p",[e._v("指定 php 安装目录")]),e._v(" "),a("p",[e._v("--with-apxs2=/usr/local/apache/bin/apxs")]),e._v(" "),a("p",[e._v("整合 apache，apxs功能是使用mod_so中的LoadModule指令，加载指定模块到 apache，要求 apache 要打开SO模块")]),e._v(" "),a("p",[e._v("--with-config-file-path=/usr/local/php/etc")]),e._v(" "),a("p",[e._v("指定php.ini位置")]),e._v(" "),a("p",[e._v("--with-MySQL=/usr/local/mysql")]),e._v(" "),a("p",[e._v("mysql安装目录，对mysql的支持")]),e._v(" "),a("p",[e._v("--with-mysqli=/usr/local/mysql/bin/mysql_config")]),e._v(" "),a("p",[e._v("mysqli扩展技术不仅可以调用MySQL的存储过程、处理MySQL事务，而且还可以使访问数据库工作变得更加稳定。")]),e._v(" "),a("p",[e._v("--enable-safe-mode   打开安全模式")]),e._v(" "),a("p",[e._v("--enable-ftp   打开ftp的支持")]),e._v(" "),a("p",[e._v("--enable-zip   打开对zip的支持")]),e._v(" "),a("p",[e._v("--with-bz2    打开对bz2文件的支持")]),e._v(" "),a("p",[e._v("--with-jpeg-dir   打开对jpeg图片的支持")]),e._v(" "),a("p",[e._v("--with-png-dir   打开对png图片的支持")]),e._v(" "),a("p",[e._v("--with-freetype-dir   打开对freetype字体库的支持")]),e._v(" "),a("p",[e._v("--without-iconv   关闭iconv函数，种字符集间的转换")]),e._v(" "),a("p",[e._v("--with-libXML-dir   打开libxml2库的支持")]),e._v(" "),a("p",[e._v("--with-XMLrpc    打开xml-rpc的c语言")]),e._v(" "),a("p",[e._v("--with-zlib-dir   打开zlib库的支持")]),e._v(" "),a("p",[e._v("--with-gd    打开gd库的支持")]),e._v(" "),a("p",[e._v("--enable-gd-native-ttf   支持TrueType字符串函数库")]),e._v(" "),a("p",[e._v("--with-curl    打开curl浏览工具的支持")]),e._v(" "),a("p",[e._v("--with-curlwrappers    运用curl工具打开url流")]),e._v(" "),a("p",[e._v("--with-ttf     打开freetype1.*的支持，可以不加了")]),e._v(" "),a("p",[e._v("--with-xsl     打开XSLT 文件支持，扩展了libXML2库 ，需要libxslt软件")]),e._v(" "),a("p",[e._v("--with-gettext     打开gnu 的gettext 支持，编码库用到")]),e._v(" "),a("p",[e._v("--with-pear    打开pear命令的支持，PHP扩展用的")]),e._v(" "),a("p",[e._v("--enable-calendar    打开日历扩展功能")]),e._v(" "),a("p",[e._v("--enable-mbstring    多字节，字符串的支持")]),e._v(" "),a("p",[e._v("--enable-bcmath    打开图片大小调整,用到zabbix监控的时候用到了这个模块")]),e._v(" "),a("p",[e._v("--enable-sockets     打开 sockets 支持")]),e._v(" "),a("p",[e._v("--enable-exif    图片的元数据支持")]),e._v(" "),a("p",[e._v("--enable-magic-quotes    魔术引用的支持")]),e._v(" "),a("p",[e._v("--disable-rpath    关闭额外的运行库文件")]),e._v(" "),a("p",[e._v("--disable-debug    关闭调试模式")]),e._v(" "),a("p",[e._v("--with-mime-magic=/usr/share/file/magic.mime      魔术头文件位置")]),e._v(" "),a("p",[e._v("CGI方式安装才用的参数")]),e._v(" "),a("p",[e._v("--enable-fpm")]),e._v(" "),a("p",[e._v("打上PHP-fpm 补丁后才有这个参数，CGI方式安装的启动程序")]),e._v(" "),a("p",[e._v("--enable-fastCGI")]),e._v(" "),a("p",[e._v("支持fastcgi方式启动PHP")]),e._v(" "),a("p",[e._v("--enable-force-CGI-redirect")]),e._v(" "),a("p",[e._v("重定向方式启动PHP")]),e._v(" "),a("p",[e._v("--with-ncurses")]),e._v(" "),a("p",[e._v("支持ncurses 屏幕绘制以及基于文本终端的图形互动功能的动态库")]),e._v(" "),a("p",[e._v("--enable-pcntl                     freeTDS需要用到的，可能是链接mssql 才用到")]),e._v(" "),a("p",[e._v("mhash和mcrypt算法的扩展")]),e._v(" "),a("p",[e._v("--with-mcrypt                     算法")]),e._v(" "),a("p",[e._v("--with-mhash                      算法")]),e._v(" "),a("p",[e._v("以上函数库需要安装")]),e._v(" "),a("p",[e._v("--with-gmp  应该是支持一种规范")]),e._v(" "),a("p",[e._v("--enable-inline-optimization  优化线程")]),e._v(" "),a("p",[e._v("--with-openssl                     openssl的支持，加密传输时用到的")]),e._v(" "),a("p",[e._v("--enable-dbase                     建立DBA 作为共享模块")]),e._v(" "),a("p",[e._v("--with-pcre-dir=/usr/local/bin/pcre-config      perl的正则库案安装位置")]),e._v(" "),a("p",[e._v("--disable-dmalloc")]),e._v(" "),a("p",[e._v("--with-gdbm                     dba的gdbm支持")]),e._v(" "),a("p",[e._v("--enable-sigchild")]),e._v(" "),a("p",[e._v("--enable-sysvsem")]),e._v(" "),a("p",[e._v("--enable-sysvshm")]),e._v(" "),a("p",[e._v("--enable-zend-multibyte         支持zend的多字节")]),e._v(" "),a("p",[e._v("--enable-mbregex")]),e._v(" "),a("p",[e._v("--enable-wddx")]),e._v(" "),a("p",[e._v("--enable-shmop")]),e._v(" "),a("p",[e._v("--enable-soap")]),e._v(" "),a("h4",{attrs:{id:"php7-2源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php7-2源码安装"}},[e._v("#")]),e._v(" php7.2源码安装")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" http://103.40.19.56/lnmp/libzip-1.3.2.tar.gz\n\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" curl-devel libjpeg-devel libpng-devel freetype-devel libxml2-devel libzip\n\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71 --exec-prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71 --bindir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/bin --sbindir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/sbin --includedir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/include --libdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/lib/php --mandir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/php/man --with-config-file-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/php71/etc --with-mcrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/libmcrypt --with-mhash --with-openssl --with-mysqli"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/mysql/bin/mysql_config --with-pdo-mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/mysql --with-gd --with-iconv --with-zlib --enable-inline-optimization --disable-debug --disable-rpath --enable-shared --enable-xml --enable-bcmath --enable-shmop --enable-sysvsem --enable-mbregex --enable-mbstring --enable-ftp --enable-gd-native-ttf --enable-pcntl --enable-sockets --with-xmlrpc --enable-soap --without-pear --with-gettext --enable-session --with-curl --with-jpeg-dir --with-freetype-dir --enable-fpm --without-gdbm --disable-fileinfo --enable-opcache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("no\n\n./configure   --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/www/php   --with-config-file-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/www/php/etc  --enable-libxml   --enable-xml   --enable-bcmath   --enable-shmop   --enable-sysvsem   --enable-inline-optimization   --enable-opcache   --enable-mbregex   --enable-fpm   --enable-mbstring"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("all   --with-openssl   --enable-pcntl   --enable-sockets   --with-xmlrpc   --enable-zip   --enable-soap   --without-pear   --with-gettext   --enable-session   --with-curl   --enable-ctype   --enable-shared   --with-gd   --with-pdo-mysql --with-mysql-sock"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/var/lib/mysql/mysql.sock\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" php.ini-development /www/php/etc/php.ini\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /www/php/etc \n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" php-fpm.conf.default php-fpm.conf \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /www/php/etc/php.ini \ncgi.fix_pathinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v("  /www/php/etc/php-fpm.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" www.conf.default  www.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" www.conf\n\n/www/php/sbin/php-fpm\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" /www/php/bin/php  /usr/local/bin/php\n\nphp -m\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("h4",{attrs:{id:"php7-3源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php7-3源码安装"}},[e._v("#")]),e._v(" php7.3源码安装")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/www/php73 --with-config-file-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/www/php73 --enable-fpm --with-mysqli --with-pdo-mysql --enable-mbstring --with-gd --enable-soap --enable-cli --with-curl --with-openssl-dir --with-zlib-dir --disable-fileinfo --with-ldap"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("shared --enable-xml --enable-dom  --enable-calendar --with-gettext --with-mcrypt --enable-soap --enable-gd-native-ttf --enable-ftp --enable-mbstring --enable-exif --disable-ipv6 --with-curl --enable-bcmath --enable-sockets\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" php.ini-development /www/php73/php.ini\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" sapi/fpm/init.d.php-fpm /etc/init.d/php73\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" /www/php73/etc/php-fpm.conf.default  /www/php73/etc/php-fpm.conf\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" /etc/init.d/php73\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chkconfig")]),e._v(" --add php73\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chkconfig")]),e._v(" php73 on\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" php73 start\n\n\n修改一下date.timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Asia/Shanghai"')]),e._v("\n\n在进入安装后php路径etc下将 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" php-fpm.conf.default php-fpm.conf \n\n在进入cd php-fpm.d/\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" www.conf.default www.conf\n\n修改www.conf 的启动用户和端口\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("h4",{attrs:{id:"php7-4源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php7-4源码安装"}},[e._v("#")]),e._v(" php7.4源码安装")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install -y openssl-devel libxml2-devel bzip2-devel libcurl-devel libjpeg-devel libpng-devel freetype-devel libmcrypt-devel recode-devel libicu-devel libzip-devel sqlite-devel oniguruma-devel gmp-devel readline-devel gflags-devel\n\ncp -frp /usr/lib64/libldap* /usr/lib/\n\nwget https://nih.at/libzip/libzip-1.2.0.tar.gz\ntar -zxvf libzip-1.2.0.tar.gz\ncd libzip-1.2.0\n./configure\nmake && make install\nexport PKG_CONFIG_PATH=\"/usr/local/lib/pkgconfig/\"\n\n或者\nrpm -Uvh http://rpms.remirepo.net/enterprise/remi-release-7.rpm \nyum —enablerepo=remi install libzip5-devel \n\n./configure --prefix=/opt/php74 --with-mysqli=/opt/mysql/bin/mysql_config --with-pdo-mysql=/opt/mysql --enable-inline-optimization --disable-debug --disable-rpath --enable-shared --enable-xml --enable-bcmath --enable-shmop --enable-sysvsem --enable-mbregex  --enable-ftp --enable-gd-native-ttf --enable-pcntl --enable-sockets --with-xmlrpc --enable-soap --without-pear --with-gettext --enable-session --with-curl --with-jpeg-dir --with-freetype-dir --enable-fpm --without-gdbm --enable-fileinfo --enable-opcache --enable-ctype --enable-dom --with-mhash --with-iconv --enable-json --enable-mbstring --with-openssl --enable-posix --enable-session --enable-simplexml --enable-xmlreader --enable-xmlwriter --with-zlib --enable-gd --with-zip --enable-bz2 --enable-intl --with-ldap --with-smbclient --enable-bcmath --with-gmp --enable-exif --enable-pcntl --with-libxml \n\n\n\n/lib64/liblber-2.4.so.2: could not read symbols: Invalid operation\ncollect2: ld returned 1 exit status\nmake: *** [sapi/cli/php] Error 1\n\n./configure后\n\n编辑MakeFile\n\n找到 开头是 'EXTRA_LIBS' 这一行 在结尾加上 '-llber' 然后执行 make && make install\n\n\nPHP模块imagick\navconv或ffmpeg\nOpenOffice或LibreOffice\nimagick\nmemcached\nZend OPcache\n\nyum install -y libwebp libwebp-devel\n\n./configure --with-php-config=/opt/php74/bin/php-config --with-jpeg-dir=/usr/local/libjpeg --with-png-dir=/usr/local/libpng --with-freetype-dir=/usr/local/freetype --with-zlib-dir=/usr/local/zlib\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br")])]),a("h4",{attrs:{id:"yum安装php7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum安装php7"}},[e._v("#")]),e._v(" yum安装php7")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm\n\n现在使用yum命令按以下方式安装所需的全部扩展程序PHP和PHP-FPM。\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" php70w-fpm php70w-mcrypt php70w-curl php70w-cli php70w-mysql php70w-gd php70w-xsl php70w-json php70w-intl php70w-pear php70w-devel php70w-common php70w-mbstring php70w-tidy php70w-zip php70w-soap "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v("\n\n安装完成后，我们需要编辑"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'php.ini'")]),e._v("配置文件并编辑php-fpm池配置"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'www.conf'")]),e._v("。\n\n使用vim编辑器编辑"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'php.ini'")]),e._v("配置文件。\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/php.ini\n\n取消注释"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cgi.fix_pathinfo'")]),e._v("行并将该值更改为"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0'")]),e._v("。\n\ncgi.fix_pathinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n保存并退出。\n\n接下来，编辑池配置文件"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'www.conf'")]),e._v("。\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/php-fpm.d/www.conf\n\n将运行PHP-FPM服务的默认用户更改为"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'nginx'")]),e._v("用户和组。\n\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" nginx\ngroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" nginx\n在"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'listen'")]),e._v("行中，将值更改为sock文件，如下所示。 我们将在sock文件下运行PHP-fpm。\n\nlisten "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /var/run/php-fpm/php-fpm.sock\n现在为套接字权限和所有者配置。 取消注释这些行并按如下所示更改值。\n\nlisten.owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" nginx\n listen.group "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" nginx\n listen.mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 0660\n最后，取消注释PHP-FPM环境。\n\nenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOSTNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOSTNAME")]),e._v("\n env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /usr/local/bin:/usr/bin:/bin\n env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TMP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /tmp\n env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TMPDIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /tmp\n env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TEMP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" /tmp\n\n在CentOS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("上安装PHP Composer\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sS https://getcomposer.org/installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" composer.phar /usr/bin/composer\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" -v\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br")])]),a("h4",{attrs:{id:"php-ini配置文件参数优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-ini配置文件参数优化"}},[e._v("#")]),e._v(" php.ini配置文件参数优化")]),e._v(" "),a("p",[e._v("用于生产环境中的PHP需要对其进行优化，让PHP自身发挥更好的性能，除了写好PHP代码，还要配置好php-fpm以及php.ini调优。本文从内存、OPcache、上传、会话以及安全等方面讲解php.ini的配置调优。")]),e._v(" "),a("h5",{attrs:{id:"内存优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存优化"}},[e._v("#")]),e._v(" 内存优化")]),e._v(" "),a("p",[e._v("运行 PHP 时需要关心每个 PHP 进程要使用多少内存，php.ini 中的"),a("em",[e._v("memory_limit")]),e._v(" 设置用于设定单个 PHP 进程可以使用的系统内存最大值。\n这个设置的默认值是 128M，这对于大多数中小型 PHP 应用来说或许合适，不过，如果运行的是微型 PHP 应用，可以降低这个值，以便节省系统资源，反之，如果运行的是内存集中型 PHP 应用，可以增加这个值。这个值的大小由可用的系统内存决定，确定给 PHP 分配多少值是一门艺术，决定给 PHP 分配多少内存，以及能负担起多少个 PHP-FPM 进程时，可以根据以下维度信息进行判断：")]),e._v(" "),a("p",[e._v("\\1.   一共可以分配给 PHP 多少内存？以一个 2G 内存的 VPS 为例，这台设备中可能还运行了其他进程，如 MySQL、Nginx 等，那么留 512M 给 PHP 是合适的。")]),e._v(" "),a("p",[e._v("\\2.   每个 PHP 进程平均耗费多少内存？这个要监控进程的内存使用量，可以使用命令行命令top，也可以在 PHP 脚本中调用 memory_get_peak_usage() 函数，不管使用哪种方式，都要多次运行同一个脚本，然后取内存消耗的平均值。")]),e._v(" "),a("p",[e._v("\\3.   能负担起多少个 PHP-FPM 进程？假设我给 PHP 分配了 512M 内存，每个 PHP 进程平均耗费 15M 内存，那么可以负担起 34 个 PHP-FPM 进程。\n有足够的系统资源吗？最后还需要确认有足够的系统资源运行 PHP 应用并处理预期的流量。")]),e._v(" "),a("h5",{attrs:{id:"开启zend-opcache性能加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启zend-opcache性能加速"}},[e._v("#")]),e._v(" 开启Zend OPcache性能加速")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/24/62b525ec233ac.png",alt:"IMG_256"}})]),e._v(" "),a("p",[e._v("PHP属于解释型语言，在执行代码过程中，翻译器并不产生目标机器代码，而是产生易于执行的中间代码，这种中间代码每执行一次就翻译一次，通常会导致执行效率较低，而在PHP7中可以直接开启Opcache来进行性能优化和加速。\nPHP 5.5+版本以上的，可以使用PHP自带的opcache开启性能加速（默认是关闭的），PHP5.5之后opcache可以直接--enable-opcache。对于PHP 5.5以下版本的，可以使用APC来进行缓存。")]),e._v(" "),a("h5",{attrs:{id:"配置opcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置opcache"}},[e._v("#")]),e._v(" 配置Opcache")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zend_extension=opcache.so\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";(网上很多资料使用engine = On来,是window下的php)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.enable=1 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";设置多少内存缓存opcode,单位M。如果内存不够用，就会出现一些php文件缓存不到的情况。解决办法是设置缓存到文件中去")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.memory_consumption=128\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";最大允许缓存多少个php文件,需要根据项目的文件数来定。这个值一定要比 PHP 应用中的文件数大。最大支持100万个文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.max_accelerated_files=4000\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";这个设置的值为1时，经过一段时间后 PHP 会检查 PHP 脚本的内容是否有变化，检查的时间间隔由opcache.revalidate_freq设置指定。如果这个设置的值为0，PHP 不会检查 PHP 脚本的内容是否有变化，我们必须自己动手清除缓存的操作码。建议在开发环境中设置为1，生产环境中设置为0。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.validate_timestamps=0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";验证时间戳的频率。单位是秒。;此选型依赖于opcache.vilidate_timestamps=1(开启检查机制)，才生效")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.revalidate_freq = 60\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";字符串驻留技术使用多少内存，设置为8M,这是默认值。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.interned_strings_buffer = 16\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";快速释放内存,推荐开启,节省资源。php-7.2.0开始,不需要配置,已集成在php引擎中")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.fast_shutdown=1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";设置:是不是只使用文件来缓存opcode,不使用内存缓存。建议:关掉。最好内存和文件都同时使用")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.file_cache_only=false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v(";将内存中缓存的opcdoe，备份到磁盘文件中。这样好处，重启服务器时，可以避免重新生成了。注意目录的权限要设对，设置php引擎所属linux用户能够写入。实测,若权限不够,并不会报错,只是缓存不进去")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("opcache.file_cache=/apps/php-7.1.7/opcode_file_cache\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[e._v("#")]),e._v(" 文件上传")]),e._v(" "),a("p",[e._v("如果你的应用允许上传文件，最好设置最大能上传的文件大小。除此之外，最好还要设置最多能同时上传多少个文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" file_uploads = 1\n upload_max_filesize = 10M\n max_file_uploads = 3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("默认情况下，PHP 允许在单次请求中上传 20 个文件，上传的文件最大为 2MB，这里我设置为单次请求最多只能上传 3 个文件，每个文件最大为 10MB，这个值不要设置太大，否则会出现超时。\n注：如果非要上传大文件，Web 服务器的配置也要做相应调整。除了在 php.ini 中设置之外，还要调整 Nginx 虚拟主机配置中的 client_max_body_size 设置。\n此外，如果是上传特大文件，我建议使用Webuploader专门的上传组件，前端对大文件进行切片，后端php对分片数据进行合并还原文件。有关WebUploader应用请参考本站文章：功能强大的文件上传组件-WebUploader。")]),e._v(" "),a("h5",{attrs:{id:"执行时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行时间"}},[e._v("#")]),e._v(" 执行时间")]),e._v(" "),a("p",[a("em",[e._v("max_execution_time")]),e._v(" 用于设置单个 PHP 进程在终止之前最长可运行时间。这个设置默认是 30 秒，建议将其设置为 5 秒：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("max_execution_time = 5\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("注：在 PHP 脚本中可以调用*set_limit_time()*函数覆盖这个设置。\n假设我们想要生成报告，并把结果制作成 PDF 文件，这个任务可能要花 10 分钟才能完成，而我们肯定不想让 PHP 请求等待 10 分钟，我们应该单独编写一个 PHP 文件，让其在单独的后台进程中执行，Web 应用只需几毫秒就可以派生一个单独的后台进程，然后返回 HTTP 响应。\n实际上，我们在跑需要消耗大量时间来完成的任务，一般采用后台进程方式，比如我们可以使用PHP的swoole扩展来生成报表、批量发送邮件耗时长的任务。")]),e._v(" "),a("h5",{attrs:{id:"处理会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理会话"}},[e._v("#")]),e._v(" 处理会话")]),e._v(" "),a("p",[e._v("PHP 默认的会话处理程序会拖慢大型应用，因为这个处理程序会把会话数据存储在硬盘中，需要创建不必要的磁盘 I/O，浪费时间。我们应该把会话数据保存在内存中，例如可以使用 Memcached 或 Redis。这么做还有个额外好处 —— 以后便于伸缩。如果会话数据存储在硬盘中，不便于增加额外的服务器，如果把会话数据存放在 Memcached 或 Redis 里，任何一台分布式 PHP-FPM 服务器都能访问会话数据。\n如果想把会话数据保存在 Memcached 中，需要做如下配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("session.save_handler = 'memcached'\nsession.save_path = '127.0.0.1:11211'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h5",{attrs:{id:"缓冲输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲输出"}},[e._v("#")]),e._v(" 缓冲输出")]),e._v(" "),a("p",[e._v("如果是在较少的块中发送更多数据，而不是在较多的块中发送较少的数据，那么网络的效率会更高，也就是说，在较少的片段中把内容传递给访问者的浏览器，能减少 HTTP 请求总数。\n因此，我们要让 PHP 缓冲输出，默认情况下，PHP 已经启用了输出缓冲功能，PHP 缓冲 4096 字节的输出之后才会把内容发送给 Web 服务器，推荐配置如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("output_buffering = 4096implicit_flush = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("注：如果想要修改输出缓冲区的大小，确保使用的值是4（32位系统）或8（64位系统）的倍数。")]),e._v(" "),a("h5",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[e._v("#")]),e._v(" 安全")]),e._v(" "),a("p",[a("em",[e._v("open_basedir")]),e._v("：使用open_basedir选项能够控制PHP脚本只能访问指定的目录，这样能够避免PHP脚本访问不应该访问的文件，一定程度上限制了phpshell的危害。我们一般可以设置为只能访问网站目录：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("open_basedir = /data/www\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("一般我们要禁止系统函数和禁止任何文件和目录的操作，如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("disable_functions = passthru,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("expose_php = Off：将此项设置为false即不会再header头输出PHP版本信息。\ndisplay_errors = Off：生产环境中，我们应该禁止错误提示，如果是本地开发环境，可以设置为On。\nlog_errors = On：建议在关闭display_errors后能够把错误信息记录下来，便于查找服务器运行的原因。\nerror_log：设置PHP错误日志存放的目录。")])])}),[],!1,null,null,null);s.default=t.exports}}]);