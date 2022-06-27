(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{573:function(v,_,t){"use strict";t.r(_);var a=t(22),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("运维故障是DBA和运维人员心中永远的痛，而避免故障的方法却有迹可循。下面是本人总结的十条远离故障的运维工作经验。")]),v._v(" "),t("ol",[t("li",[v._v("确保变更可以回滚")])]),v._v(" "),t("p",[v._v("佛说：“每次创伤都是一次成熟”。这是运维人员的真实写照。从某种意义上讲，运维是一份不断犯错、不断积累经验的工作。以前没有经历的东西，总是不定期的给你痛击。所以请保护好变更的现场，使得变更有回头的机会。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("小心破坏性的操作")])]),v._v(" "),t("p",[v._v("什么是破坏性的操作？比如：对 Oracle 而言，有truncate table_name，delete table_name，drop table_name。这些语句执行起来轻松简单也惬意极了，但记住：即便数据可被回滚，其代价也是非常大！")]),v._v(" "),t("p",[v._v("对Linux而言，“rm -r” 将删除当前及其子目录的所有数据。有过这种教训的，一般都会给rm起个别名，如 alias rm=’rm -i’。同理，对cp和mv也可以这样做：\nalias cp='cp -i'\nalias mv='mv -i'")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("设置好命令提示")])]),v._v(" "),t("p",[v._v("在操作之前，先弄清楚所在的是主库还是备库？当前目录是什么？哪个schema？session？时间？ 比如，对Oracle来讲：\nidle> set sqlprompt 'RAC-node1-primary@10g>>'\nRAC-node1-primary@10g>>")]),v._v(" "),t("p",[v._v("当然，你也可以在glogin.sql里面对其设置。")]),v._v(" "),t("p",[v._v("对Linux而言，可通过设置PS1来知道当前目录、登陆用户名和主机信息等。更多有关的PS1信息请参见：man PS1")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("备份并验证")])]),v._v(" "),t("p",[v._v("人非圣贤，岂能无过？是机器总有计划内或计划外崩溃的一天。怎么办？备份！！！\n备份的学问很大，按照不同的维度可以分冷备和热备、实时和非实时、物理和逻辑。")]),v._v(" "),t("p",[v._v("OLTP 7*24 在线业务，DB 就需要有实时热备。这样就可以了吗？开发人员的一个不带任何条件的 delete 还是会误删所有数据。\n所以，此时你除了实时备份还需要有非实时的备份。")]),v._v(" "),t("p",[v._v("备份有了，可以高忱无忧了吗？不行！尚须验证备份的有效性。总有那么几次备份无法保证100%恢复。简单的验证就是找个空库并恢复出来。")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("对生产环境永保敬畏之心")])]),v._v(" "),t("p",[v._v("会计人员在从业之前，都有个职业操守的训练。同理这也应该是运维人员进入行业前首先需要具备的素养。比如：于Oracle而言，你可以跑一个RDA巡检DB的健康状况。\n对Linux而言，是否有password aging，隔离外网等。")]),v._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[v._v("交接和休假最容易出故障，变更请谨慎")])]),v._v(" "),t("p",[v._v("接手别人的工作要一而再，再而三的确认变更方案。请教人并不见得就是能力不行的表现。休假前最好各种可以做好的事情，最好能够准备一份文档，指明在什么情况下怎么做和联系哪些人。在别人放假的时候接手工作，“能拖则拖”，实在需要执行，必须不厌其烦的跟原运维者确认各个操作细节。")]),v._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[v._v("搭建报警，及时获取出错信息；搭建性能监控，预测趋势")])]),v._v(" "),t("p",[v._v("运维人员赖于生存的工具就是报警和监控。")]),v._v(" "),t("p",[v._v("报警可以让你及时知道系统出现了什么异常，以便及时跟进和把故障扼杀于摇篮。")]),v._v(" "),t("p",[v._v("监控可以让你了解系统的历史性能信息，以历为鉴，可以知兴替和早做优化。")]),v._v(" "),t("p",[v._v("报警和优化是衣宽带水的好兄弟，它们相铺相成、互相促进。")]),v._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[v._v("自动切换需谨慎")])]),v._v(" "),t("p",[v._v("例如，Oracle存储级的HA方案：Data Guard。主库提交了一笔订单，结果发生了switchover，这笔订单没有同步到备库。\n那么卖家损失了一个销售单。这对对客户和公司都是损失。")]),v._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[v._v("仔细一点、偏执一点、检查、检查、再检查")])]),v._v(" "),t("p",[v._v("有这么一个人：")]),v._v(" "),t("p",[v._v("1）做一个变更的时候，会先提前一两周发送邮件并电话手机通知相关人；\n2）在测试机上写好脚本，召集大家review操作步骤和脚本；\n3）测试完成以后拷贝到生产环境；\n4）登录对应机器，“打开、关闭、打开、关闭”该脚本。\n5）跟相关人员再次确认执行的操作、顺序、时间点、可能的影响和回滚是否都准备好了；\n6）执行前还要退出这个机器，然后再登录进去，“打开，关闭”脚本；\n7）最后才在后台运行脚本，同时在另外一个窗口登录，随时ps和查看结果输出。")]),v._v(" "),t("p",[v._v("期间姿势端正，呼吸急促而均匀，眼神凝重。操作的人不觉得累，倒是一边学习的人很累。")]),v._v(" "),t("ol",{attrs:{start:"10"}},[t("li",[v._v("简单即是美")])]),v._v(" "),t("p",[v._v("这有点禅的意境，和GNU/Linux的思想不谋而合。")]),v._v(" "),t("p",[v._v("我们总是面临各种诱惑：新的系统架构、新的更智能的命令和工具、最新的硬件平台、功能更全的HA软件。。。\n你可以在线下安装、测试；怎么搞都行。但是如果想要在生产环境下使用起来，请三思！！")]),v._v(" "),t("p",[v._v("能够使用系统内置命令的话，就不用考虑其他要专门下载安装的软件了。\n脚本本身就能完成的功能，就没有必要专门找一个功能丰富的软件来做。\nlinux本身自带的字符界面比那些复杂的图形界面要简洁方便。")])])}),[],!1,null,null,null);_.default=r.exports}}]);