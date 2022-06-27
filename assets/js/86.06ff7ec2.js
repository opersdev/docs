(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{582:function(t,a,v){"use strict";v.r(a);var _=v(22),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h5",{attrs:{id:"嘉宾简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#嘉宾简介"}},[t._v("#")]),t._v(" 嘉宾简介")]),t._v(" "),v("h5",{attrs:{id:"陈贻泰"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#陈贻泰"}},[t._v("#")]),t._v(" 陈贻泰")]),t._v(" "),v("h5",{attrs:{id:"凡客诚品运维部高级经理-负责idc机房和网站业务的技术运营-及内部企业it的系统网络运维。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#凡客诚品运维部高级经理-负责idc机房和网站业务的技术运营-及内部企业it的系统网络运维。"}},[t._v("#")]),t._v(" 凡客诚品运维部高级经理，负责IDC机房和网站业务的技术运营，及内部企业IT的系统网络运维。")]),t._v(" "),v("h5",{attrs:{id:"从事it基础设施方面的工作十多年。曾在武汉微软技术中心专门为多种行业、大中小企业做it规划和建设-后来加入了凡客诚品-全程深度参与了公司的系统及网络基础设施的建设。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从事it基础设施方面的工作十多年。曾在武汉微软技术中心专门为多种行业、大中小企业做it规划和建设-后来加入了凡客诚品-全程深度参与了公司的系统及网络基础设施的建设。"}},[t._v("#")]),t._v(" 从事IT基础设施方面的工作十多年。曾在武汉微软技术中心专门为多种行业、大中小企业做IT规划和建设；后来加入了凡客诚品，全程深度参与了公司的系统及网络基础设施的建设。")]),t._v(" "),v("p",[t._v("今天很高兴在这里跟大家交流，我演讲的题目是《大中型互联网企业IT基础架构概览》。")]),t._v(" "),v("p",[t._v("我个人作为凡客诚品2011到2013年快速的发展的见证者和亲历者，凡客作为一个互联网企业最高峰时，仅员工规模就超过一万三千人。这样的发展速度和企业规模的内部IT基础设施会有什么特色呢？")]),t._v(" "),v("h3",{attrs:{id:"主题介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主题介绍"}},[t._v("#")]),t._v(" 主题介绍")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a20055.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们从根本上谈起，IT的本质是服务。IT的服务对象是企业，所以企业的业务决定了企业信息化的方向，也决定了IT基础架构的特征。")]),t._v(" "),v("p",[t._v("我将要介绍的IT基础架构设计思想就是这样一个以服务企业业务为目标的信息化建设模型，并且会以模型为框架来介绍具体应用。")]),t._v(" "),v("h3",{attrs:{id:"tcp-ip模型给的启示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip模型给的启示"}},[t._v("#")]),t._v(" TCP/IP模型给的启示")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a23fdb.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们先来看看这个，想必都很熟悉这两张图：TCP/IP模型和OSI模型。我们经常用他们来指导我们解决遇到的技术问题。")]),t._v(" "),v("p",[t._v("以TCP/IP模型来讲，最上面的是应用层，然后是传输层、网络层、数据链路层和物理层，我们知道每个层面为上面的层面提供服务。")]),t._v(" "),v("p",[t._v("这是一个很好的自顶向下的设计思想，以及分层和模块化的设计思想。")]),t._v(" "),v("h3",{attrs:{id:"it设计模型与实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#it设计模型与实现"}},[t._v("#")]),t._v(" IT设计模型与实现")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a29a50.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("如果我们在TCP/IP的应用层再加上一个层面，就是咱公司的业务层，就变成了这样5个层面：业务层、应用系统层、基础系统层、网络层，以及机房层，再加上左右两个竖条，资源管理与监控、审计与安全，这就是我归纳的IT设计模型。")]),t._v(" "),v("p",[v("strong",[t._v("我先简单介绍下这个模型：")])]),t._v(" "),v("p",[t._v("\\1.   业务层，公司的业务情况，比如公司行政、财务业务，销售业务")]),t._v(" "),v("p",[t._v("\\2.   应用系统层，公司业务的技术化体现，指应用系统，比如一般企业的ERP，OA，CRM")]),t._v(" "),v("p",[t._v("\\3.   基础系统层，这个层面开始往下，应该是我们IT运维人员最为熟悉的了。比如dns、dhcp、文件、邮件就属于系统层")]),t._v(" "),v("p",[t._v("\\4.   网络层，就是路由器、交换机、防火墙组成的互联网络")]),t._v(" "),v("p",[t._v("\\5.   机房层，狭义上可以理解就是咱服务器、交换机存放的机房\n广义上应该还包括IT所有物理层面相关的东西")]),t._v(" "),v("p",[t._v("对于资源管理与监控，以及安全与审计，应该是贯穿各个层面的。")]),t._v(" "),v("p",[t._v("总之，这个分成模型是帮忙我们理解整个企业IT系统的，对于不同的IT人员有不同的切入角度。作为我们运维人员，我们就需要从运维的角度去看待各个层面对我们自身工作的影响。")]),t._v(" "),v("p",[t._v("简单的说，企业IT基础架构，按照这个模型，就涵盖了基础系统层、网络层、机房层，所以在实际工作中，更多的要考虑业务层、应用系统层对这下三层的影响，下三层，也就是IT基础架构层面要怎么设计和建设才能满足公司业务发展，才能满足应用系统正常运行。")]),t._v(" "),v("p",[t._v("在凡客具体的IT建设中，我们总结出一套方法，来实现一个满足上层要求的IT基础架构，也就是我这里提到的贯彻五化。服务化、标准化、自动化、自助化、技术化，后面我会详细讲到。")]),t._v(" "),v("h3",{attrs:{id:"历史背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#历史背景"}},[t._v("#")]),t._v(" 历史背景")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a21280.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("按照刚才的模型，我将以凡客诚品这个公司为样本来讲述。从上而下，从历史背景和业务开始，最后落实到我们一个个系统网络的设计上。")]),t._v(" "),v("p",[t._v("这张图里面列了三组数字，意思是：2011~2013是凡客快速发展的年月。其中员工从300多最终到达13000多。站点也从北京大约4个办公点+仓储扩张到全国约40个，其中28个仓储、6个办公室，6个数据中心。")]),t._v(" "),v("p",[t._v("所以我们技术有很大很大的压力，刚才列举的一些数字可能大家没有直观的感受，我就举个例子，记得当时会议室都成了固定办公的场地，通道上都是人，我们IT每天做大的工作就是拆纸箱子，发电脑，创建账户，一次发个上百台电脑是家常便饭。")]),t._v(" "),v("h3",{attrs:{id:"业务层和应用系统层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务层和应用系统层"}},[t._v("#")]),t._v(" 业务层和应用系统层")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a22fed.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们了解了凡客当时的历史背景，再看看业务情况，主要分四大块：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("企业办公")])]),t._v(" "),v("li",[v("p",[t._v("仓储中心")])]),t._v(" "),v("li",[v("p",[t._v("呼叫中心")])]),t._v(" "),v("li",[v("p",[t._v("快递物流")])])]),t._v(" "),v("p",[t._v("重点讲讲仓储，我们知道凡客是个网站，网站上有各种虚拟商品，这些虚拟商品是真实存在于全国三十来个仓库中的。")]),t._v(" "),v("p",[t._v("当客户从网站上下完单，对应的商品就会从被分配给离客户最近的仓库，有仓库的工人拣货，打包，然后发给物流快递，最终送到到客户手里。")]),t._v(" "),v("p",[t._v("客户对整个流程也是一目了然的，后台会有对应的若干系统，通过各种方式展示给客户，比如网页、手机短信、邮件。")]),t._v(" "),v("p",[t._v("这个就是我们业务和应用系统的冰山一角，它对我们的基础IT架构有什么影响呢？马上给大家介绍。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87a21ffa.jpg",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("我们先看看基础系统层面的具体设计和实践。基础系统层我认为包含这些：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("网络基础服务：DNS、DHCP")])]),t._v(" "),v("li",[v("p",[t._v("基础办公：文件、打印")])]),t._v(" "),v("li",[v("p",[t._v("企业沟通：邮件、即时通讯、电话")])]),t._v(" "),v("li",[v("p",[t._v("信息安全：账户管理、权限")]),t._v(" "),v("p",[t._v("5、IT运维：桌面管理、虚拟机管理等")])])]),t._v(" "),v("h3",{attrs:{id:"基础系统层之dns和dhcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之dns和dhcp"}},[t._v("#")]),t._v(" 基础系统层之DNS和DHCP")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87ab11af.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("由于我们仓储业务和呼叫中心业务的特点，对高可用性要求相当高。")]),t._v(" "),v("p",[t._v("这个我亲身有体会，刚入职没多久，我们团队对上海的一个仓库的域控制器进行升级，导致了运行在上面的DNS服务器出现了中断，大约半个小时吧。当时领导没说话，看大家正忙着恢复呢。但是领导事后告诉我说，你不知道当时库房流水线上有上千个人都不能干活。")]),t._v(" "),v("p",[t._v("所以，其实我现在讲的整个凡客IT基础架构。由于业务的关系，最大的特点之一，就是对IT基础设施的可用性要求非常高。整个大家后面还会看到，可以说是无处不在。")]),t._v(" "),v("p",[t._v("我们基本上主体都是使用windows服务器来提供DNS和DHCP服务。")]),t._v(" "),v("p",[t._v("为什么呢，主要是windows活动目录的普及，所有计算机都加入域，windows AD本身就有DNS了，当然加个DHCP服务也很容易，windows上面管理DHCP还是比网络设备上管理要方便太多。")]),t._v(" "),v("p",[t._v("除了windows AD的先发优势和既有资源的优势外，windows上的DNS和DHCP在高可用性上也符合业务的要求。")]),t._v(" "),v("p",[t._v("拿dns来讲，dns服务器每个站点就有2台，这2台是通过AD复制服务保持状态和数据同步的，而且AD复制机制是双向的，比dns自身主从复制更有优势，当然，linux的bind也是主从单向复制。")]),t._v(" "),v("p",[t._v("对于客户端，当然网卡上需要设置本地的2个DNS服务器地址作为冗余了。")]),t._v(" "),v("p",[t._v("DNS使用中还有一个中国人都会遇到的问题，就是电信和联通的问题，因为我们仓库系统、内部管理系统有时需要调取网站的图片，比如某个单品页，衣服的图片，由于cdn和各地站点网络出口不同的问题，为了提高访问这个图片的效率，需要就近访问该图片CDN的缓存，所以对于internet的访问，需要转发到本地ISP提供的DNS。")]),t._v(" "),v("p",[t._v("不过这个需要注意，由于各地ISP服务质量不一样，你需要仔细观察线路和实际命中情况，为此我们有时不得不使用自己部署的专门负责电信或者联通线路解析的dns。不过现在好了，可以考虑用阿里或者百度的智能DNS server。")]),t._v(" "),v("p",[t._v("域名使用中，有使用内部和外部dns问题，我们的情况是内部和外部域名是不一样的，这样做会省掉因为内外部域名一样导致的麻烦，具体麻烦就不细说了，一般推荐内外部域名不一样比较好。")]),t._v(" "),v("p",[t._v("然后在日常dns注册过程中，内部的系统就用内部的域名，千万不要内外部域名随便用。这样根据整洁，也更加安全，不至于将某个外部域名解析成内部ip。")]),t._v(" "),v("h4",{attrs:{id:"关于dhcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于dhcp"}},[t._v("#")]),t._v(" 关于Dhcp")]),t._v(" "),v("p",[t._v("首先是子网和IP池的规划，要注意的是要和网络人员一起考虑，不要太小气，要充分考虑到业务的发展和架构的伸缩。我们整个内网基本上采用10.0.0.0整个私有网络。")]),t._v(" "),v("p",[t._v("高可用性方面也是两台DHCP服务器，分别部署在各地2台域控上，我记得DHCP设计高可用性设计原则上一般是说2、8原则，我们在实际中其实是55原则。")]),t._v(" "),v("p",[t._v("比如，一个子网，前半段的IP有第一台服务器分配，后半段的由第二段分配。为什么每台分配一部分，而且不重叠，就是考虑到分配ip的时候避免分配同一个ip，导致ip冲突。实际我们测试过程中，两台服务器分配范围完全一样，也没有遇到问题。")]),t._v(" "),v("p",[t._v("对于DHCP高可用性，windows官方做法有DHCP 集群，就是windows cluster到windows 2008 R2的时候支持DHCP服务器了，比如之前一般只支持SQL集群提高可用性。但是这种cluter有个致命的问题，就是两个节点的服务器群集需要一个共享磁盘来作为仲裁盘和数据盘，虽然服务器层面没有了单点故障，但是共享磁盘是个单点故障。")]),t._v(" "),v("p",[t._v("而且共享磁盘这资源要求其实不低。。专业的磁盘阵列很贵，模拟的也不放心。当然，本质上dhcp服务实际上在节点故障后并不需要特别快速的切换，所以我们采用这种55原则这种架构更简单的方案。")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之文件打印"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之文件打印"}},[t._v("#")]),t._v(" 基础系统层之文件打印")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87add9fc.jpg",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("关于办公用文件系统采用的是windows标准的文件服务器解决方案，细节不谈了，主要有这些特色：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("全公司内访问路径统一：\\vancloa.cn\\file\\；")])]),t._v(" "),v("li",[v("p",[t._v("按照部门所需进行磁盘空间配额")])]),t._v(" "),v("li",[v("p",[t._v("支持数据热备和可回滚")])]),t._v(" "),v("li",[v("p",[t._v("基于角色的权限设计")])]),t._v(" "),v("li",[v("p",[t._v("集中的打印系统")])])]),t._v(" "),v("h3",{attrs:{id:"基础系统层之邮件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之邮件"}},[t._v("#")]),t._v(" 基础系统层之邮件")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87b9272d.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("由于业务上我们有企业办公、凡客网站、vjia网站、如风达快递，所以我们exchange对应接收有vancl.cn、vancl.com、vjia.com、rufengda.com等域名后缀的邮件。")]),t._v(" "),v("p",[v("strong",[t._v("凡客的邮件业务可以基本分为：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("一般办公人员收发；")])]),t._v(" "),v("li",[v("p",[t._v("大量的业务邮件收取，比如service@vancl.com用来接受投诉的邮箱的，通过程序收取给后台客服系统进行处理，特点是量大。")])]),t._v(" "),v("li",[v("p",[t._v("更大量的报警内部邮件投递给内部相关人员；")])]),t._v(" "),v("li",[v("p",[t._v("更大大量的广告邮件、订单状态邮件等发送给外部客户；")])])]),t._v(" "),v("p",[t._v("从技术上看，邮件除了收，就是发，所以凡客的邮件系统主要基于这两个软件，一个是微软的Exchange Server 2010，我们Exchange用于办公协作，和邮件的收取。一个是开源软件Postfix，用于邮件投递以及过滤垃圾邮件这块。")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之exchange架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之exchange架构"}},[t._v("#")]),t._v(" 基础系统层之Exchange架构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87bcc174.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("Exchange作为企业内部邮件是非常优秀的，众多大中型企业在用它就说明了这一点。")]),t._v(" "),v("p",[t._v("Exchange和桌面outlook配合的确是办公协作的利器，对移动手机支持也非常不错，现在我们的安卓苹果手机邮件同步基本上也都是用exchange模式。")]),t._v(" "),v("p",[t._v("其他exchange在会议室管理、通讯录、通讯组方面也很不错。如果必须选择自建办公邮件系统的话，exchange应该是最佳选择了。")]),t._v(" "),v("p",[t._v("另外为什么业务也采用exchange作为邮件收取，主要是它的高可用性和可扩展性。")]),t._v(" "),v("p",[t._v("各位可以看看我们的exchange系统架构示意图，前端各个模块角色扩展性很好，后端数据库可用性和扩展性也很好。")]),t._v(" "),v("p",[t._v("这里有一个小技巧，数据库这块尽量多分，从安全的角度考量，多个鸡蛋不要放在同一个篮子上，多个用户平均分布。")]),t._v(" "),v("p",[t._v("另外我们的邮件服务器全部是虚拟主机。")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之邮件发送流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之邮件发送流"}},[t._v("#")]),t._v(" 基础系统层之邮件发送流")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87bcd6bd.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们知道exchange本身就可以作为投递，为什么要单独拿出来再做一个邮件投递系统了。")]),t._v(" "),v("p",[t._v("原因是我们的业务模式决定了。而且从技术上开，邮件投递只需要很轻便的smtp服务就可以了，所以postfix非常适合，可以极大的降低exchange的负载。")]),t._v(" "),v("p",[t._v("而且各类邮件是分开的，避免交叉影响。尤其是影响邮件投递的成功率。比如EDM大量的投递，那么对应的IP地址池很可能信誉度会降低，就会影响正常办公邮件和其他业务邮件的投递，假如投递系统没有分开的话。")]),t._v(" "),v("h3",{attrs:{id:"基础系统之即时通讯"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统之即时通讯"}},[t._v("#")]),t._v(" 基础系统之即时通讯")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87bd612c.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("刚才我们了解了邮件异步通讯这块，那么凡客的即时通讯是个什么情况？")]),t._v(" "),v("p",[t._v("简单的一句话，我们打通了传统电话和IP电话、打通了PC和手机、打通了即时通讯和邮件、打通了开源Sipx和微软Lync、打通了PSTN电话网络和VOIP计算机网络，形成了一个统一的企业沟通系统。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87c3abcc.jpg",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("这个张图是当时的Lync系统架构部署图。从这个图里可以了解整个统一沟通平台的大致情况：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("Lync自身的高可用设计，杜绝单点故障")])]),t._v(" "),v("li",[v("p",[t._v("这是一个分布式的电话系统，全国各地都有自身的SIPX来管理电话机，以及从通过当地语音网关从当地ISP出局，Lync负责PC终端")])]),t._v(" "),v("li",[v("p",[t._v("手机、电话、PC是互联互通的")])])]),t._v(" "),v("p",[t._v("企业统一沟通。从沟通来讲，手机、电脑、电话合一，从技术来讲，我们使用IP网络，传统电话网络和内部的计算机网络是合二为一的。")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之账户与权限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之账户与权限"}},[t._v("#")]),t._v(" 基础系统层之账户与权限")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87c24ebf.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("账号管理是企业IT的重头戏，凡客这块个人认为做得很有特点。")]),t._v(" "),v("p",[t._v("原本这次大会我希望的演讲主题就是账号相关的，但是我们后面的新东方王威老师捷足先登了。所以我这里只稍微讲下大概，详细的账号自动化管理方面的事情后面会由我们的王威老师跟大家说。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("凡客以windows AD作为账号管理系统，因为我们的办公、以及线上服务器，无论是windows还是linux都是域管理模式。")])]),t._v(" "),v("li",[v("p",[t._v("凡客账号管理既有自动化，也有用户自助化的特点，这个后面我会再次提到。")])]),t._v(" "),v("li",[v("p",[t._v("凡客内部的权限都是基于AD账号的，不管你是登陆个人PC还是办公或者网站服务器、网络设备，或者是内部网站，像登陆PC或者登陆金蝶，这类验证方式可以归属为LDAP方式，权限控制基本上有各个系统自行控制，或者结合windows AD的安全组来进行控制，对于登陆公司内部系统，由于自己开发的，所以基本上都是采用自己开发的一组webservice来验证和统一授权，提供这些接口的系统在我们内部叫PMS权限管理系统。")])])]),t._v(" "),v("p",[t._v("账号管理这块我们是非常有特点的，这个架构除了适应互联网企业，据我了解，我们之前有离职的员工去了传统行业的上市公司，也把这个方案带过去了，做得很好。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d3eead.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("这是我们当时DC服务器全国的一个分布图。我们有两个核心的内部用数据中心，只有在两个数据中心是可写的DC，其余三十来个站点全部是只读。这样的架构，高可用性和安全性都能照顾到。")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之ad设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之ad设计"}},[t._v("#")]),t._v(" 基础系统层之AD设计")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d356bc.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("关于AD设计，最有特点的就是OU结构的扁平化设计，而不是基于传统的组织结构。我们的OU结构是基于AD的对象类型来划分的，基本上分为账号类的OU，通讯组类的OU，安全组类的OU，计算机账号类的OU。")]),t._v(" "),v("p",[t._v("比如在Employment这个OU下，所有的员工账号都在里面，因为离职的账号我们只会禁用，所以目前这里面账号应该有好几万吧。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("因为我们的OU很少，层级也很少，这么做可以极大地降低AD账号自动化管理的难度，你如果觉得会影响组策略什么的，我可以告诉你我们考虑过了，这都不是问题，凡客IT后续和账号相关的管理，很多都得益于这个最最基础的简单的AD数据结构")])]),t._v(" "),v("li",[v("p",[t._v("还一个就是性能问题，从我的经验看，上万活动账号都不是问题，个人认为10万以上都不是问题。")])])]),t._v(" "),v("h3",{attrs:{id:"基础系统层之it运维自动化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之it运维自动化"}},[t._v("#")]),t._v(" 基础系统层之IT运维自动化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d80729.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("IT运维自动化的核心和前提其实是标准化，这个是运维思想层面的事情，具体我们是通过微软system center中系列实现，尤其是SCCM系统。")]),t._v(" "),v("p",[t._v("我们根据业务类型，制作了不同的操作系统镜像，有仓储的，有一般办公的，有开发人员的，有呼叫中心坐席的，都可以裸机网络启动来安装好系统，不仅仅提高了工作效率，关键是整个系统都是标准的，规范的。这个也成为了我们系统安全的基石。")]),t._v(" "),v("p",[t._v("有些软件安装是需要授权的，我们通过账号管理系统中的审批流程来实现审批，审批完成，用户就能自己安装了。")]),t._v(" "),v("p",[t._v("远程协助解决公司内部pc终端问题也都靠它，这样一个北京的支持人员可以远程去支持广州的桌面问题。看起来SCCM整个工具很强大，其实更强大的是我们的标准化。")]),t._v(" "),v("p",[t._v("除了桌面支持，后台没有SCCM的系统、网络都可以这么做，因为每个地方的网络环境、软件系统环境都是一个标准的，中心的人员可以直接快速的支持任何一个站点的系统网络。这样做，导致了整个部门管理效率的提升！")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之it运维自动化-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之it运维自动化-2"}},[t._v("#")]),t._v(" 基础系统层之IT运维自动化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d7dbd6.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们当时有将近40个站点，一个非常简单的结构，而且这个结构是扁平化，节约成本。")]),t._v(" "),v("p",[t._v("这个是老版本的sccm系统架构，目前是SCCM 2012 r2，该架构的特点是别处新意的。我们近四十个站点，数千台PC终端，采用的架构是扁平化的。")]),t._v(" "),v("p",[v("strong",[t._v("细节就不谈了，只说说整个架构的优点：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("架构简单，易于部署和后续管理，节约成本")])]),t._v(" "),v("li",[v("p",[t._v("系统安装和软件分发类似CDN，没有跨站点的流量")])])]),t._v(" "),v("p",[t._v("各位有公司用到SCCM，而且站点比较多的，可以借鉴")]),t._v(" "),v("h3",{attrs:{id:"基础系统层之虚拟化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础系统层之虚拟化"}},[t._v("#")]),t._v(" 基础系统层之虚拟化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d7cc62.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("虚拟化在外面的基础架构中的地位举足轻重，说句极端的话，由于历史原因，很可惜，企业IT服务器虚拟化比例没有达到百分之百。")]),t._v(" "),v("p",[t._v("凡客的办公核心，各地机房，我的原则是，务必全部虚拟化。所以，从某个层面来看，我是把物理机看出一种平台而已了。")]),t._v(" "),v("p",[t._v("我们前面谈到AD、lync、sipx、exchange、SCCM、文件服务器等等，基本上都是虚拟机。")]),t._v(" "),v("p",[t._v("采用虚拟机的好处就不多说，主要是要注意风险，尤其是不能把鸡蛋放到一个篮子里面。")]),t._v(" "),v("p",[t._v("我们知道虚拟化后，一台物理机上跑了多个虚拟机，这一台物理机一挂就是挂一片虚机，所以风险是增大了。")]),t._v(" "),v("p",[t._v("我们虚机比例非常高的后面是因为我们在服务层面是没有单点故障的，比如我们每个站点提供账号验证、DNS、DHCP服务的域控，每个站点都有两台，而且这两台绝对不在同一台宿主机上，甚至这两台宿主机不在同一个机柜，不是使用同一个PDU，同一个交换机。\n。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87d7b5c3.jpg",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87e96f3d.jpg",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("网络层的架构设计上我们有两个特点：")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("关键节点和链路没有单点故障。比如链路，所有的站点之间的连接时双链路，一条是光纤专线，一条是internert上网线路中建立的VPN虚拟专线，在核心的IDC之间更是有多条专线和VPN组成环路，保障公司站点之间网络高可用")])]),t._v(" "),v("li",[v("p",[t._v("我们所有的网络路由逻辑层面全部采用的动态的路由协议OSPF和BGP，保障了链路选择动态、智能和的故障后的快速收敛")])])]),t._v(" "),v("h4",{attrs:{id:"网络层之idc间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之idc间"}},[t._v("#")]),t._v(" 网络层之IDC间")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87ebc094.jpg",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"网络层之站点间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之站点间"}},[t._v("#")]),t._v(" 网络层之站点间")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87f14d4d.jpg",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"网络层之站点内"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之站点内"}},[t._v("#")]),t._v(" 网络层之站点内")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87f1dd3c.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("我们企业办公方面，同样都是双链路连接到就近的IDC，站点内的核心设备和链路都是有热备或冗余的设计。")]),t._v(" "),v("h3",{attrs:{id:"网络层之无线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之无线"}},[t._v("#")]),t._v(" 网络层之无线")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87f1f150.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("办公和仓储、漫游和性能、abng的选择、802.1X与网络验证。这方面我就不细说了，每个业务场景不一样，对漫游、性能、并发、带宽、可用性等关注点的侧重会不一样，每个企业的需求也都不一样。")]),t._v(" "),v("h3",{attrs:{id:"网络层之vpn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之vpn"}},[t._v("#")]),t._v(" 网络层之VPN")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87f1b89a.jpg",alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("我们出差的时候都需要用VPN，我们使用的是微软的产品，处于以下考虑:")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("个人用户使用VPN主要要考虑客户端方便配置，比如能够用系统自带的VPN拨号就最好")])]),t._v(" "),v("li",[v("p",[t._v("另外就是账号最好和办公的一致，省掉记忆多个账号的烦恼，以及穿透性要非常好，毕竟全国各地的网络情况都不一样。穿透性的协议是HTTPS类的，而不是传统的PPTP和L2TP")])]),t._v(" "),v("li",[v("p",[t._v("除此之外，就是考虑适当假设多台，分布全国各地IDC，一方面提供了VPN服务器的冗余，一方面可以为外出同事可以选择连接最近最佳的服务器。")])])]),t._v(" "),v("p",[t._v("site to site 采用的是标准的ipsec加密的隧道，作为站点之间的专线的紧急备份线路，反过来其实专线也是互联网线路的备份，二者互为备份。")]),t._v(" "),v("h3",{attrs:{id:"网络层之qos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层之qos"}},[t._v("#")]),t._v(" 网络层之QOS")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87f974c5.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("QOS是为了更好的利用好有限的带宽，我们每个站点基本都是双出口、关键节点无单点，高可用性方面是没有问题的，但是带宽仍然很稀缺，所以必须能够有效的对带宽进行监控和审计，并且从技术上保障业务流量优先。")]),t._v(" "),v("h3",{attrs:{id:"机房层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机房层"}},[t._v("#")]),t._v(" 机房层")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87fb622f.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("机房主要关注这些条件，场地、温湿度、电力、空调、机柜、承重、互联线路。不同的业务场景需求是不一样的。")]),t._v(" "),v("p",[t._v("比如在某些办公机房，为了节约成本和灵活期间，测试和开发的demo机是在办公机房的，我们主要关注的是提供计算密度，这个对空调、承重、机柜、电力、网络有较高的要求。")]),t._v(" "),v("p",[t._v("而仓库地理环境比较恶劣，全国各地都不一样，接入层的小机柜尤其如此，要注意防潮、防尘，甚至防冻，需要因地制宜。")]),t._v(" "),v("h3",{attrs:{id:"五化-之it服务化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五化-之it服务化"}},[t._v("#")]),t._v(" “五化”之IT服务化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec87fe0ba9.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("分层的IT基础架构设计模型大致介绍完了，自顶向下的原则可以帮忙我们关注目标，分层和模块化的思维可以帮助我们更好的关注自身负责的范围，提供更好的服务。")]),t._v(" "),v("p",[t._v("同时，在凡客具体的IT建设中，我们总结出一套方法，来实现这样一个满足上层要求的IT基础架构，也就是前面提到的贯彻五化。服务化、标准化、自动化、自助化、技术化。")]),t._v(" "),v("p",[t._v("首先是IT本身的服务化。对于日常运维，这类事情是运维的主体工作，虽然琐碎、技术含量一般不高，但是非常影响客户（外部用户和公司同事）的用户体验，影响运维团队提供的服务质量。ITIL中的事件管理系统可帮助我们管理日常运维工作。")]),t._v(" "),v("p",[t._v("我们就基于ITIL的IT服务管理思想，结合自身业务情况，公司自己开发了一套事件管理系统。个人认为这套系统最有意义的地方有两处：")]),t._v(" "),v("p",[t._v("使各个团队或者部门的服务接口化了，用户可以根据自己选择的事情类别由系统分配给最适合的团队来处理。原理是各个团队将自己的工作职责进行了菜单化，用户根据自己的需求“点菜”即可。")]),t._v(" "),v("p",[t._v("比如上海办公室的用户outlook有问题了，就可以在事件管理系统中输入outlook，找到outlook相关的服务项，选中提交即可，系统会根据用户账户里面的属性分配给上海的IT桌面支持团队处理。")]),t._v(" "),v("p",[t._v("系统也有分配错误的时候，被分配者可以重新替用户转给认为正确的团队处理……我甚至认为应该将这个系统推送给公司所有部门使用，而不是仅仅局限于技术中心。")]),t._v(" "),v("p",[t._v("服务质量的把控技术化了。用户的问题根据重要情况是分级别的，不同的级别有不同的初始响应时间，响应不及时以及后续处理不及时会升级，不是原本不重要的事情变成重要，而是无论哪种事情，响应不及时会逐级报给事件处理人的领导，甚至领导的领导。")]),t._v(" "),v("p",[t._v("当然，还有相关的统计报表，来统计个人和团队的事件处理数量和质量。所以无论是个人还是团体部门，都像有一根鞭子在背后飞舞。")]),t._v(" "),v("h3",{attrs:{id:"五化-之it服务自助化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五化-之it服务自助化"}},[t._v("#")]),t._v(" “五化”之IT服务自助化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec88071c33.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("这个图是我们AES账户管理系统的截图，通过这个系统，员工可以自助式的对账户相关的事情进行自助式的管理。比如自己或者帮助周边新同事申请邮箱、获取初始密码、加入或者退出通讯组或安全组。")]),t._v(" "),v("p",[t._v("为什么叫自助化？因为很多原来需要IT处理的事情一般员工能够自己搞定了，把原本IT的事情分散掉，将IT极大的从琐碎事项中解放出来，不仅如此，也提高了公司整体的工作效率。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec88073d98.jpg",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"五化-之账户管理自动化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五化-之账户管理自动化"}},[t._v("#")]),t._v(" “五化”之账户管理自动化")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec8808f291.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("这个图仍然是AES账户管理系统中关于批量启用员工邮箱账户的功能截图。通过这个功能，后台的系统管理员可以批量的对新入职员工启用邮箱。关于AES系统，这是我们账户自动化系统中的一个关键中间环节，它的上游是人事系统、下游是AD系统，邮件系统等。举个例子，一个员工入职或者离职，IT系统管理员是不需要关注的，AD账户会自动创建或者禁用。这个就是自动化。")]),t._v(" "),v("h3",{attrs:{id:"五化-之其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五化-之其他"}},[t._v("#")]),t._v(" “五化”之其他")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec880a6430.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("标准化和技术化。标准化是一切自助化和自动化的基础。技术化可以规范你的行为，达成你的标准化。")]),t._v(" "),v("p",[t._v("就像我们日常开车，要对安全的有很好的认识（思想上），制定了交通法规（制度上）来指导我们开车，路上也设置了各种行车线。")]),t._v(" "),v("p",[t._v("比如实线和虚线，路中间的实线就 是不能碾压和跨越的，高速上的实线处还设立了很高和厚实的水泥防护栏，这个水泥防护栏就是思想和制度技术化的极端体现。实线拦不住不守规矩的车，但是水泥 防护栏能！")]),t._v(" "),v("p",[t._v("所以思想需要形成文档来固化，文档最好通过技术化的实体软件系统来固化以协助我们更正确的工作。")]),t._v(" "),v("p",[t._v("有了体现思想的制度和软件系统，最关键的是要用，天天用。还有，不是所有的文化思想都能固化的，所以还要培训和沟通，这些无形的和有形的都需要讲，换着方法的讲，日日讲。")]),t._v(" "),v("h3",{attrs:{id:"资源管理和监控"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#资源管理和监控"}},[t._v("#")]),t._v(" 资源管理和监控")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec880d382d.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("运维人员作为公司IT系统这辆车的司机，当然需要对这辆车的性能了然于胸的。")]),t._v(" "),v("p",[t._v("建立资源管理系统和监控体系，为业务决策提供历史数据支撑。自行车要升级成为摩托还是小车，还是只需要更换一个好点的轮胎，需要数据说话。")]),t._v(" "),v("h3",{attrs:{id:"安全与审计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全与审计"}},[t._v("#")]),t._v(" 安全与审计")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://image.aomtop.com/i/2022/06/19/62aec88102555.jpg",alt:"img"}})]),t._v(" "),v("p",[t._v("安全不是一个人的事情，也不是一个层面的事情，比如我应用系统的业务逻辑设计再怎么密不透风，也架不住机房失火，数据全毁。")]),t._v(" "),v("p",[t._v("所以需要建立纵深的安全机制，应用系统网络各个层面的安全意识深入骨髓，建立起整个安全防御机制。")]),t._v(" "),v("p",[t._v("以上是我分享的大中型互联网企业IT基础架构，谢谢大家！")]),t._v(" "),v("h4",{attrs:{id:"想了解更多的第一手企业it技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#想了解更多的第一手企业it技术"}},[t._v("#")]),t._v(" 想了解更多的第一手企业IT技术？")]),t._v(" "),v("p",[t._v("来GOPS2016全球运维大会·上海站，您就对了！")]),t._v(" "),v("p",[t._v("甚至还有知名传统企业公司来分析企业IT技术哟。")])])}),[],!1,null,null,null);a.default=s.exports}}]);