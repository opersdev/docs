(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{574:function(a,t,_){"use strict";_.r(t);var s=_(22),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h5",{attrs:{id:"讲师介绍-何小锋"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#讲师介绍-何小锋"}},[a._v("#")]),a._v(" 讲师介绍：何小锋")]),a._v(" "),_("h5",{attrs:{id:"拥有18年的研发经验-喜欢技术-追求卓越。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥有18年的研发经验-喜欢技术-追求卓越。"}},[a._v("#")]),a._v(" 拥有18年的研发经验，喜欢技术，追求卓越。")]),a._v(" "),_("h5",{attrs:{id:"_2011年加入京东-担任了京东两届架构委员会常委。在京东负责过百亿级的分布式消息系统。2014年下半年开始负责基于docker的弹性技术平台-通过诺亚方舟项目-成功的让京东各个业务系统全面迁移到容器上。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2011年加入京东-担任了京东两届架构委员会常委。在京东负责过百亿级的分布式消息系统。2014年下半年开始负责基于docker的弹性技术平台-通过诺亚方舟项目-成功的让京东各个业务系统全面迁移到容器上。"}},[a._v("#")]),a._v(" 2011年加入京东，担任了京东两届架构委员会常委。在京东负责过百亿级的分布式消息系统。2014年下半年开始负责基于Docker的弹性技术平台，通过诺亚方舟项目，成功的让京东各个业务系统全面迁移到容器上。")]),a._v(" "),_("h5",{attrs:{id:"在京东期间支持过多次的618和双11大促-见证了京东的技术演进过程-在弹性计算、中间件、存储和大并发分布式系统等方面积累了丰富的实践经验。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在京东期间支持过多次的618和双11大促-见证了京东的技术演进过程-在弹性计算、中间件、存储和大并发分布式系统等方面积累了丰富的实践经验。"}},[a._v("#")]),a._v(" 在京东期间支持过多次的618和双11大促，见证了京东的技术演进过程，在弹性计算、中间件、存储和大并发分布式系统等方面积累了丰富的实践经验。")]),a._v(" "),_("p",[a._v("大家好，我是来自京东的何小锋，今天我跟大家分享一下**《京东Docker的实践经验》**。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69422dd4.jpg",alt:"img"}})]),a._v(" "),_("h3",{attrs:{id:"_1、京东容器之路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、京东容器之路"}},[a._v("#")]),a._v(" 1、京东容器之路")]),a._v(" "),_("h4",{attrs:{id:"_1-1-面临的挑战"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-面临的挑战"}},[a._v("#")]),a._v(" 1.1 面临的挑战")]),a._v(" "),_("p",[a._v("京东为什么要使用Docker？京东在以前主要是基于物理机进行应用的部署，随着京东业务的发展，面临着很多挑战。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6942c24a.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("比如说，硬件采购周期比较长，新的应用有可能会等一个月，物理机才会上线。")]),a._v(" "),_("p",[a._v("很多应用部署到物理机上，应用资源的使用情况，大家掌握得不是很清楚，你没有办法精细化运营这个应用。")]),a._v(" "),_("p",[a._v("它是用得多了还是用得少了？而且硬件的成本也很高，每年京东物理机采购上万台，成本很高。")]),a._v(" "),_("p",[a._v("在双11或者6·18之前会做一些压力评估，需要快速扩容，现在扩容的话如果采用物理机的话，京东会花费一个月的时间进行扩容操作，非常慢。京东还有很多数据中心，要把整个部署完需要很长的时间。")]),a._v(" "),_("h4",{attrs:{id:"_1-2-用户关注"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-用户关注"}},[a._v("#")]),a._v(" 1.2 用户关注")]),a._v(" "),_("p",[a._v("我们采用一些虚拟化或者容器的技术解决我们面临的问题，在跟用户沟通的过程中，用户真的不太关注你是采用物理机还是容器、虚拟化的技术，其实他们更关注的是，你给我换了技术以后，系统是不是稳定的？")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6942a33a.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("例如，一些下单操作、京东首页性能要求敏感的应用，对性能是非常看重的，如果使用容器，要确保性能没有损失。")]),a._v(" "),_("p",[a._v("京东有五千多名研发人员，要确保用户的体验，如果你换了新的技术，还需要对所有的人再一次的培训，花费的时间是非常长的。")]),a._v(" "),_("h4",{attrs:{id:"_1-3-容器化之路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-容器化之路"}},[a._v("#")]),a._v(" 1.3 容器化之路")]),a._v(" "),_("p",[a._v("在2013年我们最初采用的是虚拟化的KVM的技术，在用的过程中，面临了性能的问题，有几个核心的应用性能达不到要求。")]),a._v(" "),_("p",[a._v("在2014年我们看到容器发展比较迅速，在2014年四季度采取容器技术进行试点，最先试点的是京东图片系统，发现性能非常不错，而且我们做了弹性伸缩调度，效果也非常明显。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6942b08e.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("所以，我们在2015年第一季度就把弹性的平台做起来了，在6·18的时候就用在了生产环境，在6·18的时候没有采用物理机来分配，能分配容器的全部使用容器分配，分配了差不多1万个容器。")]),a._v(" "),_("p",[a._v("在6·18期间非常稳定，并且在下半年新机房的建设全部采用容器建设，目前京东的容器数已经差不多有10万的规模。")]),a._v(" "),_("h4",{attrs:{id:"_1-4-选择docker的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-选择docker的原因"}},[a._v("#")]),a._v(" 1.4 选择Docker的原因")]),a._v(" "),_("p",[a._v("我们从KVM切进Docker的时候，做了一个评估，我们觉得Docker还是非常胜任京东应用场景的。")]),a._v(" "),_("p",[a._v("它比较轻量，性能比较好，可以快速部署，稳定性足够高，在京东的环境下对安全性也要求不高，所以说，我们用Docker非常合适京东私有云的环境。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6942e547.jpg",alt:"img"}})]),a._v(" "),_("h3",{attrs:{id:"_2、弹性计算架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、弹性计算架构"}},[a._v("#")]),a._v(" 2、弹性计算架构")]),a._v(" "),_("p",[a._v("其实京东的私有云的弹性的架构还是比较简单的，我们采用了开源和自研相结合的架构。")]),a._v(" "),_("p",[a._v("基础的平台更多的采用社区开源的技术，包括OpenStack、Docker、虚拟化网络、OVS，存储是采用京东资源的分布式存储系统。")]),a._v(" "),_("p",[a._v("在上层我们使用的是自己的一个调度系统，是一个CAP的调度，它做了一些应用的治理和部署，包括弹性的调度、监控。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6942d5df.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-1-openstack"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-openstack"}},[a._v("#")]),a._v(" 2.1 OpenStack")]),a._v(" "),_("p",[a._v("在Docker的外面我们包了一个OpenStack，社区里有很多人不使用OpenStack，其实我们是结合京东的一个现状来采用的OpenStack。")]),a._v(" "),_("p",[a._v("京东做虚拟化是从OpenStack开始做的，所以说下面的团队对OpenStack还是非常了解的，我们沿用OpenStack做集群的管理，而且OpenStack也相对比较成熟。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec694c382f.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("我们做Docker的时候，社区这些都不是很完善。所以，我们就是沿用OpenStack，而且OpenStack社区的方案还是非常多的。")]),a._v(" "),_("p",[a._v("还有一个目的，我们现有的京东公有云也是做了OpenStack做了集群的调度和管理。")]),a._v(" "),_("h4",{attrs:{id:"_2-2-网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-网络"}},[a._v("#")]),a._v(" 2.2 网络")]),a._v(" "),_("p",[a._v("网络方面比较简单，我们就直接选择了OVS/VLan的模式进行处理，但是在性能上我们做了优化，特别是一些包的延迟，做了很大的提升。")]),a._v(" "),_("p",[a._v("经过我们的优化以后，本身网络的一些性能会有20%的提升。")]),a._v(" "),_("p",[a._v("为了保持用户的习惯，京东所有的基础设施都是以IP来做区分的，所以我们为每一个容器都分配一个独立的IP。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec695b0de0.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-3-存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-存储"}},[a._v("#")]),a._v(" 2.3 存储")]),a._v(" "),_("p",[a._v("我们是使用了京东的自研的分布式系统来接JFS来做块存储，本地存储是用于满足日志的需求。")]),a._v(" "),_("p",[a._v("把日志打在物理机上，不是打在容器里面，主要是为了满足容器丢了，日志还可以查看一段时间，通过分布式的日志系统，近实时地把日志采集走，如果容器宕机的情况下，它可能会有那么一丁点时间日志没有上传到分布式日志系统中，但是可以人工地恢复这一块的数据。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69572ad1.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-4-镜像分层合并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-镜像分层合并"}},[a._v("#")]),a._v(" "),_("strong",[a._v("2.4")]),a._v(" "),_("strong",[a._v("镜像分层合并")])]),a._v(" "),_("p",[a._v("镜像分层上，我们采用了OS层、基础层、应用层的架构，把平时变更比较频繁的应用层做了镜像，相对比较小，这样可以减小一些存储的压力。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec695909e2.jpg",alt:"img"}})]),a._v(" "),_("h3",{attrs:{id:"_2-5-镜像中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-镜像中心"}},[a._v("#")]),a._v(" "),_("strong",[a._v("2.5")]),a._v(" "),_("strong",[a._v("镜像中心")])]),a._v(" "),_("p",[a._v("在京东有比较严格的项目管控机制，我们会对生产环境、线上的环境、预发布环境、开发、测试环境，我们会对线下的测试环境把镜像做好，做好之后再推到生产环境。")]),a._v(" "),_("p",[a._v("镜像在开放环境和生产环境是严格隔离的，必须要经过一些处理才能上传到生产的环境上。")]),a._v(" "),_("p",[a._v("镜像的存储还是使用我们京东的JFS这样一个分布式的对象存储，它也支持块存储。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec695d1348.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-6-配置中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-配置中心"}},[a._v("#")]),a._v(" 2.6 配置中心")]),a._v(" "),_("p",[a._v("京东有很多不同的环境，它的配置是不一样的。所以，构建了自己的配置中心，在容器或应用启动的时候，可以自动拉取对应的配置，可以满足一个镜像尽量不用改动就可以部署在多个环境里面。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec695dbd1f.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-7-调度系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-调度系统"}},[a._v("#")]),a._v(" 2.7 调度系统")]),a._v(" "),_("p",[a._v("我们自研的调度系统是一个类似于工作流的引擎，能够做到动态服务发现，便于扩容。")]),a._v(" "),_("p",[a._v("为什么要采用这样呢？")]),a._v(" "),_("p",[a._v("容器调度更多的是一个流程的调度，它要把京东的基础设施等按照一定的流程串起来。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6961b7cc.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("我们目前实现的一些调度流程，包括线上做一些镜像，包括上线、下线、重启、故障牵引、弹性收缩。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6965704c.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_2-8-弹性扩容流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-弹性扩容流程"}},[a._v("#")]),a._v(" 2.8 弹性扩容流程")]),a._v(" "),_("p",[a._v("这一块的流程，我们首先做了弹性的评估，觉得要进行一个弹性扩容以后，首先会创建整个容器，会做一些相关的授权。")]),a._v(" "),_("p",[a._v("比如说，可能会有一些MySQL的授权，还有一些其他权限的授权，通过我们的部署系统把这个应用部署上，再去检测这个应用是否起来了，这个应用起来的时候也有可能出现一些故障。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec696aa67b.png",alt:"img"}})]),a._v(" "),_("p",[a._v("在整个起来以后，才为把我们的监控、统一日志注册上，最后正式起来以后才会把流量打进来，调用一些负载均衡，让它把流量可以引到这台容器上，最后再上一个弹性的流程，才是一个完整的结束。")]),a._v(" "),_("h4",{attrs:{id:"_2-9-故障迁移流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-故障迁移流程"}},[a._v("#")]),a._v(" 2.9 故障迁移流程")]),a._v(" "),_("p",[a._v("在一些故障迁移方面，如果检测到某一台主机或者容器出现故障的情况下，也会触发它迁移的过程。")]),a._v(" "),_("p",[a._v("牵引首先会把流量摘掉，让没有流量打到容器上，创建一个新的容器把应用部署上，然后把它注册起来。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69715319.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("我们在牵引的过程中会保持整个容器的IP不变，这样就少了很多其他授权的一些操作了，数据库授权这些东西就不用再去做了。")]),a._v(" "),_("h4",{attrs:{id:"_2-10-弹性调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-弹性调度算法"}},[a._v("#")]),a._v(" 2.10 弹性调度算法")]),a._v(" "),_("p",[a._v("京东也实现了自动的弹性调度，弹性调度的算法相对还是比较复杂，它会根据我们现有应用的一些元素和信息，包括应用的重要程度、所属的业务域、需要的软硬件来进行评估，还有需要的规格，这个应用需要部署哪些机房，所有的信息我们都会弹性调度选择对应的机房机架。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6977c574.png",alt:"img"}})]),a._v(" "),_("p",[a._v("我们还做了一个扩展，集成了京东微服的一个框架，会把微服采集到的一些性能数据给汇报上来做一个评估，是否要对这个应用进行扩展，进行一个弹性调度。")]),a._v(" "),_("p",[a._v("弹性角度目前是根据应用的分组，在一个机房的负载情况下做一个弹性，而不是根据一个容器实时地进行弹性，最后是应用整体情况负载做一个弹性。")]),a._v(" "),_("p",[a._v("因为有时候出现一些应用程序的Bug，可能某台负载比较高，但是整体负载比较低。")]),a._v(" "),_("h3",{attrs:{id:"_3、弹性计算应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、弹性计算应用场景"}},[a._v("#")]),a._v(" 3、弹性计算应用场景")]),a._v(" "),_("p",[a._v("现在核心的一些应用，除了大数据的应用，其他应用基本上全部牵到这个容器上，我们现在所有的机房都是用容器建设的，主要应用的技术架构都可以牵进来。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec697a0315.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("比如Nginx等，还有我们京东的微服的架构JSF，包括Oracle的一些应用，还有redis，redis在京东是一个非常大的容器集群，它也是放在我们这个容器上。")]),a._v(" "),_("p",[a._v("京东也在用容器做MySQL的管理，不是所有的应用都需要微软很高性能的MySQL独享物理机，我们有一个云数据库是提供一些其他应用来使用的。")]),a._v(" "),_("h3",{attrs:{id:"_4、自动化运维"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、自动化运维"}},[a._v("#")]),a._v(" 4、自动化运维")]),a._v(" "),_("h4",{attrs:{id:"_4-1-系统监控指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-系统监控指标"}},[a._v("#")]),a._v(" 4.1 系统监控指标")]),a._v(" "),_("p",[a._v("我们采纳容器来做推广以后，对我们一些自动化的运维也做了很大的帮助。首先是监控，我们会把所有容器的基本指标都能采集到，包括系统的负载、网络的流入和流出，在这方面的一些指标采集也做了扩展。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec697bca97.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("把这些数据采集起来之后做一些实时的计算，存在基于Hbase的数据库下，这个量也非常大，我们现在容器量很大了，每一分钟都有这样的数据上传下来，所以数据量是非常大的。")]),a._v(" "),_("p",[a._v("然后，会做一些监控报警，根据自己的一些指标进行配置，是否需要去做监控报警。另外，根据这个指标其实也可以触发我们自动弹性的一个伸缩策略。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec697c340e.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-2-监控页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-监控页面"}},[a._v("#")]),a._v(" 4.2 监控页面")]),a._v(" "),_("p",[a._v("可以对一个容器进行监控，也可以对一个应用做一个整体的评估，包括这个应用网络流出、整体CPU占用量，可以从多个维度进行查看。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec697c2134.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-3-报警策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-报警策略"}},[a._v("#")]),a._v(" 4.3 报警策略")]),a._v(" "),_("p",[a._v("可以让应用进行个性化的设置，只需要设一套策略以后，每一个容器出现问题都会进行实时的报警，包括一些邮件、短信的通知。这也是跟我们京东所有的用户体系打通的。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6982a253.png",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-4-一键水平扩容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-一键水平扩容"}},[a._v("#")]),a._v(" 4.4 一键水平扩容")]),a._v(" "),_("p",[a._v("我们要做扩容，以前扩容要部署物理机，各种情况也是非常麻烦的，现在我们可以快速地扩容，一键地进行扩容。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69854174.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-5-一键垂直扩容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-一键垂直扩容"}},[a._v("#")]),a._v(" 4.5 一键垂直扩容")]),a._v(" "),_("p",[a._v("除了这种水平的扩容之外，还支持垂直的扩容，因为应用有可能会对一些规格进行一些调整，比如要把自己的内存扩大，这方面也做了一定的垂直扩容。")]),a._v(" "),_("p",[a._v("但是这里是有一定局限的，如果本机上不够的话，我们只能牵引到其他机器上进行扩容。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6991c1cc.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-6-宕机探测架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-宕机探测架构"}},[a._v("#")]),a._v(" 4.6 宕机探测架构")]),a._v(" "),_("p",[_("strong",[a._v("自动化容器宕机检测")])]),a._v(" "),_("p",[a._v("因为有很多机房，有可能一个点去检测机器的话，评估出来的报告是不准确的。")]),a._v(" "),_("p",[a._v("所以，我们在每个机房里都会有很多检测的程序，每个机房只负责检查本机房的容器，分布在不同的机架上、不同的交换机上，同时检测某一台容器，如果说全部认为这台机器可能会宕机，我们认为它的评估是比较准确的，认为这个容器宕机了就触发故障迁移流程。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6995c5db.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-7-硬件故障探测"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-硬件故障探测"}},[a._v("#")]),a._v(" 4.7 硬件故障探测")]),a._v(" "),_("p",[a._v("对于硬件故障我们进行了一些检测，这里主要是通过一些协议，拿物理机硬件报警的一些信息，京东的物理机数量越来越多，但是采购的机器或多或说的经常会有一些问题，所以说我们需要自动地检测出来，及时地进行通知，做一些故障牵引。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec6996fa5c.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-8-故障通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-故障通知"}},[a._v("#")]),a._v(" 4.8 故障通知")]),a._v(" "),_("p",[a._v("我们检测到物理机出新故障以后，会马上给相关的人做一些通知，进行一些处理。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69a70237.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_4-9-应用部署巡检"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-应用部署巡检"}},[a._v("#")]),a._v(" 4.9 应用部署巡检")]),a._v(" "),_("p",[a._v("在使用容器建设过程中，随着新机房的建设，逐步的扩容会造成一些应用部署的情况并不是非常健康。")]),a._v(" "),_("p",[a._v("我们会从应用的整体架构会做一个巡检，报告某个机房部署过多，如果需要跨机房容灾的话，必须确保两个机房的数量一致，还需要确保应用跨交换机部署。")]),a._v(" "),_("p",[a._v("如果应用在一个交换机下部署过多的话，该交换机宕机会影响应用的承载能力。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69a72af9.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("所以，我们会从多个角度巡检部署是否是健康的，做一个邮件的报告，让应用进行一些调整。")]),a._v(" "),_("h3",{attrs:{id:"_5、数据驱动的精细化运营"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、数据驱动的精细化运营"}},[a._v("#")]),a._v(" 5、数据驱动的精细化运营")]),a._v(" "),_("h4",{attrs:{id:"_5-1-资源利用率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-资源利用率"}},[a._v("#")]),a._v(" 5.1 资源利用率")]),a._v(" "),_("p",[a._v("在精细化运营上，会以每个小时为单位计算容器资源使用率，然后根据容器的资源使用率计算应用的资源使用率，通过应用和部门关系，计算部门资源使用率。这样，我们能够很好地控制目前的应用随意申请容器。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69a9cd12.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_5-2-容器资源利用率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-容器资源利用率"}},[a._v("#")]),a._v(" "),_("strong",[a._v("5.2")]),a._v(" "),_("strong",[a._v("容器资源利用率")])]),a._v(" "),_("p",[a._v("通过容器资源使用率，通过简单的数据的分析，可以计算出应用使用情况。")]),a._v(" "),_("p",[a._v("如果一个新的应用来申请容器，可以找到一个类似的应用评估一下容量的数量，包括负载的情况，可以得出一个合理的数据。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69b10d9f.jpg",alt:"img"}})]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69b3a7f7.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_5-3-部门资源利用率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-部门资源利用率"}},[a._v("#")]),a._v(" 5.3 部门资源利用率")]),a._v(" "),_("p",[a._v("部门的资源使用率可以作为部门考核的依据，这样可以看出部门申请了多少资源，整体的资源使用率是高还是低。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69b10116.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_5-4-资源剩余情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-资源剩余情况"}},[a._v("#")]),a._v(" 5.4 资源剩余情况")]),a._v(" "),_("p",[a._v("掌握现有资源情况，还剩余多少，是否需要尽快补充资源，可以给硬件采购的人提供一些建议。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69b8e792.jpg",alt:"img"}})]),a._v(" "),_("h4",{attrs:{id:"_5-5-配额管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-配额管理"}},[a._v("#")]),a._v(" 5.5 配额管理")]),a._v(" "),_("p",[_("strong",[a._v("京东有一个比较特色的东西就是配额的管理")]),a._v("，因为京东是一个非常大的集团，大家资源的需求可能各不相同，为了满足一些重要系统的需求，我们会对一、二级部门进行一个资源的隔离。")]),a._v(" "),_("p",[a._v("界定这个部门最多可以使用多少资源，做一个整体的划分，下面所有容器的申请、弹性的角度都必须在总体的配额下进行管理。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69c2f5db.jpg",alt:"img"}})]),a._v(" "),_("h3",{attrs:{id:"_6、实践经验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、实践经验"}},[a._v("#")]),a._v(" 6、实践经验")]),a._v(" "),_("p",[a._v("·     无状态，同时对磁盘IO要求不高的应用，很适合部署到弹性云")]),a._v(" "),_("p",[a._v("·     微服务应用由于能自动服务注册发现，辅助均衡，非常适合部署到弹性云")]),a._v(" "),_("p",[a._v("·     推荐使用万兆网络和网卡，避免网络共享出现资源竞争")]),a._v(" "),_("p",[a._v("·     选择稳定的操作系统版本，不同的版本可能会有一些内核的Bug，一旦出现问题，整个系统都会出现问题，对应用来说是灾难性的")]),a._v(" "),_("p",[a._v("·     推荐高配置物理机，合理得CPU和内存比，便于充分利用资源。如果说不合理的话，会浪费很多CPU和内存")]),a._v(" "),_("p",[a._v("·     采购高质量的交换机和物理机。如果物理机有质量问题，可能会影响非常多的应用，对这方面我们的要求把关是非常严格的")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/opersdev/image/i/2022/06/19/62aec69c60d8d.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("今天我跟大家分享的内容就到这里，谢谢大家！")]),a._v(" "),_("h2",{attrs:{id:"q-a"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[a._v("#")]),a._v(" Q&A")]),a._v(" "),_("h3",{attrs:{id:"提问-现在容器的应用已经差不多到了十万的规模-看到监控整个容器里面的情况-光容器这部分的指标就已经达到了近百亿了-对监控的数据信息是怎么处理和保存的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-现在容器的应用已经差不多到了十万的规模-看到监控整个容器里面的情况-光容器这部分的指标就已经达到了近百亿了-对监控的数据信息是怎么处理和保存的"}},[a._v("#")]),a._v(" 提问：现在容器的应用已经差不多到了十万的规模，看到监控整个容器里面的情况，光容器这部分的指标就已经达到了近百亿了，对监控的数据信息是怎么处理和保存的？")]),a._v(" "),_("p",[a._v("何小锋：我们是使用的Open TSDB这样 基于Hbase的，京东有一个大数据部门，它会运营Hbase，它有一个非常大的集群，我们全部存在里面，数据一直不会删除，这样会之间地根据数据分析应用的资源情况，也可以做资源的未来预测。")]),a._v(" "),_("h3",{attrs:{id:"提问-接着上一个朋友的问题问一下-mysql其实也是部署在容器里面的-但是一般来说mysql数据库是不建议这么做的-您当时是出于什么样的考虑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-接着上一个朋友的问题问一下-mysql其实也是部署在容器里面的-但是一般来说mysql数据库是不建议这么做的-您当时是出于什么样的考虑"}},[a._v("#")]),a._v(" 提问：接着上一个朋友的问题问一下，MySQL其实也是部署在容器里面的，但是一般来说MySQL数据库是不建议这么做的，您当时是出于什么样的考虑？")]),a._v(" "),_("p",[a._v("何小锋：京东有一些非常核心的应用的MySQL，目前还没有部署在容器里面。但是还有很多的应用对IO要求不是很高，如果每个应用独占一个MySQL，其实是非常浪费的。")]),a._v(" "),_("p",[a._v("所以，我们会采用一个云数据库的方案进行管理，主要是做资源的隔离，为性能要求不是很高的应用，提供MySQL的服务。")]),a._v(" "),_("h3",{attrs:{id:"提问-一般我们用docker如果这个出现问题-直接把它停掉直接推一个-但是数据是放在上面-一推全部的数据都丢了。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-一般我们用docker如果这个出现问题-直接把它停掉直接推一个-但是数据是放在上面-一推全部的数据都丢了。"}},[a._v("#")]),a._v(" 提问：一般我们用Docker如果这个出现问题，直接把它停掉直接推一个，但是数据是放在上面，一推全部的数据都丢了。")]),a._v(" "),_("p",[a._v("何小锋：京东本身的MySQL也要做高可用的方案，它也有自己的主从、数据的复制，当一台数据丢了，通过DBA主从切换，继续提供服务。")]),a._v(" "),_("h3",{attrs:{id:"提问-原生的open-stdb只支持数值型的数据插入-对于字符型数据是怎么处理的-是直接操作原生hbase吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-原生的open-stdb只支持数值型的数据插入-对于字符型数据是怎么处理的-是直接操作原生hbase吗"}},[a._v("#")]),a._v(" 提问：原生的Open STDB只支持数值型的数据插入，对于字符型数据是怎么处理的，是直接操作原生Hbase吗？")]),a._v(" "),_("p",[a._v("何小锋：我们现在存的全部是数值型的，没有字符上的。")]),a._v(" "),_("h3",{attrs:{id:"提问-你里面有一个注册日志服务的功能-我想了解一下注册日志服务的应用场景和所应用到的技术-比如有没有用到流处理-注册的话-应该有一个日志的收集-收集包含了什么样的应用和系统-docker支持吗-这方面希望关注一些。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-你里面有一个注册日志服务的功能-我想了解一下注册日志服务的应用场景和所应用到的技术-比如有没有用到流处理-注册的话-应该有一个日志的收集-收集包含了什么样的应用和系统-docker支持吗-这方面希望关注一些。"}},[a._v("#")]),a._v(" 提问：你里面有一个注册日志服务的功能，我想了解一下注册日志服务的应用场景和所应用到的技术，比如有没有用到流处理？注册的话，应该有一个日志的收集，收集包含了什么样的应用和系统，Docker支持吗？这方面希望关注一些。")]),a._v(" "),_("p",[a._v("何小锋：京东的日志有专门的一套平台进行采集和收集，你建了一个容器以后，需要把应用和信息推给它，它才能把容器产生的日志、目录这里面的数据采集到。它是一个单独的日志系统，它会实时地采集数据流，发布到平台上供检索。")]),a._v(" "),_("h3",{attrs:{id:"提问-我们发现在共享磁盘的情况下-它的高速读写会有一些性能损耗-可能没有那么高-io不能达到那么高。这样-假如说日志打得很满的话-打到数据磁盘这一块怎么处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-我们发现在共享磁盘的情况下-它的高速读写会有一些性能损耗-可能没有那么高-io不能达到那么高。这样-假如说日志打得很满的话-打到数据磁盘这一块怎么处理"}},[a._v("#")]),a._v(" 提问：我们发现在共享磁盘的情况下，它的高速读写会有一些性能损耗，可能没有那么高，IO不能达到那么高。这样，假如说日志打得很满的话，打到数据磁盘这一块怎么处理？")]),a._v(" "),_("p",[a._v("何小锋：有几个日志要求性能非常高，我们并不是直接打到物理机的硬盘上，采用了内存文件系统方式，让它的性能更高一下。")]),a._v(" "),_("h3",{attrs:{id:"提问-本身做了一个第三方的内存文件系统。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-本身做了一个第三方的内存文件系统。"}},[a._v("#")]),a._v(" 提问：本身做了一个第三方的内存文件系统。")]),a._v(" "),_("p",[a._v("何小锋：对。")]),a._v(" "),_("h3",{attrs:{id:"提问-比如说-像你们非常多的容器-整体的服务发现调度能再说一下吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-比如说-像你们非常多的容器-整体的服务发现调度能再说一下吗"}},[a._v("#")]),a._v(" 提问：比如说，像你们非常多的容器，整体的服务发现调度能再说一下吗？")]),a._v(" "),_("p",[a._v("何小锋：京东很早就有一个微服务的架构，目前京东的应用都是基于该服务架构，它本身原生已经支持了服务发现，我不用在容器上再做很多的服务发现的扩展工作，应用起来本身会自动地把一些服务（地址）提供上去，让消费者就可以连上来进行数据的处理。")]),a._v(" "),_("h3",{attrs:{id:"提问-请您详细说一下-您刚才说容器对高io不是很好-您怎么得出这个结论的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-请您详细说一下-您刚才说容器对高io不是很好-您怎么得出这个结论的"}},[a._v("#")]),a._v(" 提问：请您详细说一下，您刚才说容器对高IO不是很好，您怎么得出这个结论的？")]),a._v(" "),_("p",[a._v("何小锋：本身一台物理机上会有非常多的容器，有非常多的应用在跑，大家如果都是高IO的话，肯定会有竞争的问题，如果是独享，IO影响不大，但是如果大家的应用都是同时享IO的话，就会影响。")]),a._v(" "),_("p",[a._v("比如说，一个应用是大数据的，它拉大量的数据，又遇到一个应用是疯狂地刷日志的情况，肯定会对IO有影响，现在也经常有这样的问题需要我们去解决。")]),a._v(" "),_("h3",{attrs:{id:"提问-您说的cpu和内存比指的是物理服务器-能不能分享一下您这边推荐什么样的cpu和内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-您说的cpu和内存比指的是物理服务器-能不能分享一下您这边推荐什么样的cpu和内存"}},[a._v("#")]),a._v(" 提问：您说的CPU和内存比指的是物理服务器，能不能分享一下您这边推荐什么样的CPU和内存？")]),a._v(" "),_("p",[a._v("何小锋：这是根据不同公司而定的，我们京东采集一般都是64G、256G的内存，京东为了性能，把很多本地化内存为了充分地利用起来，一个应用起来可能希望你给8G、16G的内存。")]),a._v(" "),_("p",[a._v("我们根据这个应用它需要多少，如果是普通的应用，需要4C、8C，如果内存过低，如果用4C，差不多有60多个核，可能会用15个容器。如果是15个容器，每个应用希望是16G的内存，太少了，你根本就生不了那么多。")]),a._v(" "),_("p",[a._v("所以，可能需要你的内存，满足应用的需求。但是不同的公司是不一样的，要根据自己公司的情况去计算。")]),a._v(" "),_("h3",{attrs:{id:"提问-刚才说的十万个容器-docker引擎一直在升级-对于我们的容器存续时间这么长-容器升级是怎么做的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-刚才说的十万个容器-docker引擎一直在升级-对于我们的容器存续时间这么长-容器升级是怎么做的"}},[a._v("#")]),a._v(" 提问：刚才说的十万个容器，Docker引擎一直在升级，对于我们的容器存续时间这么长，容器升级是怎么做的？")]),a._v(" "),_("p",[a._v("何小锋：我们到现在还没有升级，现在还使用的是最原始版本。")]),a._v(" "),_("h3",{attrs:{id:"提问-新建的容器呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-新建的容器呢"}},[a._v("#")]),a._v(" 提问：新建的容器呢？")]),a._v(" "),_("p",[a._v("何小锋：容器的版本和操作系统一样，不会随便去升，虽然新版本容器提供了很多新的功能，但是一旦要升的话，我们所有的架构需要做一些调整，对系统的稳定性影响是比较大的。")]),a._v(" "),_("h3",{attrs:{id:"提问-终于有这个提问的机会-今天是唯一一个在容器中讲到存储的-我是做存储的。我说的数据库是更底层的-我们的容器和存储之间能不能做一个配合-我们一个系统解决方案中做容灾-容器容灾有两种办法-基于容器的解决办法本身怎么做-两者之间有没有结合-京东有什么考虑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-终于有这个提问的机会-今天是唯一一个在容器中讲到存储的-我是做存储的。我说的数据库是更底层的-我们的容器和存储之间能不能做一个配合-我们一个系统解决方案中做容灾-容器容灾有两种办法-基于容器的解决办法本身怎么做-两者之间有没有结合-京东有什么考虑"}},[a._v("#")]),a._v(" 提问：终于有这个提问的机会，今天是唯一一个在容器中讲到存储的，我是做存储的。我说的数据库是更底层的，我们的容器和存储之间能不能做一个配合，我们一个系统解决方案中做容灾，容器容灾有两种办法，基于容器的解决办法本身怎么做，两者之间有没有结合？京东有什么考虑？")]),a._v(" "),_("p",[a._v("何小锋：存储也是可以做容灾的，我们现在是分布式的部署，我们目前的应用就是做了一个分布式的存储系统。一旦应用要上容器，我们要跟他沟通应用的场景，比如说数据恢复以后，宕机以后数据还是有需要的，从另一台机器恢复，这样的场景我们都会使用分布式的存储系统。如果本身数据影响不是很大的话，就可以让它使用本地存储，没有去做严格的规定。")]),a._v(" "),_("h3",{attrs:{id:"提问-我想问一下-京东的监控代理是在每个主机上部署-还有选择性的部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-我想问一下-京东的监控代理是在每个主机上部署-还有选择性的部署"}},[a._v("#")]),a._v(" 提问：我想问一下，京东的监控代理是在每个主机上部署，还有选择性的部署？")]),a._v(" "),_("p",[a._v("何小锋：我们每个主机上都会有，其实我们现在监控是系统层面的监控和应用层面的监控，应用层面的监控是在每个容器里面都有的。")]),a._v(" "),_("p",[a._v("我们现在有很多应用的指标，调用到一些性能，这些东西我们是在每个容器里都有。我们容器里面监控的指标会占到5%左右的CPU，本身性能对应用影响不是很。")]),a._v(" "),_("h3",{attrs:{id:"提问-京东的容器布在物理机上-你们有没有做业务隔离-两个应用系统用了容器做安全性的隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-京东的容器布在物理机上-你们有没有做业务隔离-两个应用系统用了容器做安全性的隔离"}},[a._v("#")]),a._v(" 提问：京东的容器布在物理机上，你们有没有做业务隔离，两个应用系统用了容器做安全性的隔离？")]),a._v(" "),_("p",[a._v("何小锋：我们对应用的业务域或者重要级别是有区别的，根据应用单独把物理机做一些划分出来，比如这一台物理机就是给某一台重要的业务做的。")]),a._v(" "),_("h3",{attrs:{id:"提问-物理机各个应用之间不会互用这台物理机-是吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-物理机各个应用之间不会互用这台物理机-是吧"}},[a._v("#")]),a._v(" 提问：物理机各个应用之间不会互用这台物理机，是吧？")]),a._v(" "),_("p",[a._v("何小锋：对，如果是应用有这方面的需求，我们是可以这样做的。")]),a._v(" "),_("h3",{attrs:{id:"提问-你们当初把它建在物理机之前-有没有考虑在虚拟机上搭容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-你们当初把它建在物理机之前-有没有考虑在虚拟机上搭容器"}},[a._v("#")]),a._v(" 提问：你们当初把它建在物理机之前，有没有考虑在虚拟机上搭容器？")]),a._v(" "),_("p",[a._v("何小锋：虚拟机的话，它的性能已经满足不了应用的需求。")]),a._v(" "),_("h3",{attrs:{id:"提问-是存储的系统吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-是存储的系统吗"}},[a._v("#")]),a._v(" 提问：是存储的系统吗？")]),a._v(" "),_("p",[a._v("何小锋：虚拟机的性能是达不到的，它本身要做一些系统的调度，资源的开销还是比较大的，因为京东6·18的压力非常大，一旦有10%、20% 性能损耗都不可以。")]),a._v(" "),_("h3",{attrs:{id:"提问-固态容器里的应用应该是分布式的-虚拟机损耗的点通过更多的容器来支撑-应该问题不大"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-固态容器里的应用应该是分布式的-虚拟机损耗的点通过更多的容器来支撑-应该问题不大"}},[a._v("#")]),a._v(" 提问：固态容器里的应用应该是分布式的，虚拟机损耗的点通过更多的容器来支撑，应该问题不大？")]),a._v(" "),_("p",[a._v("何小锋：但是虚拟机性能比较多，需要的资源会更多。")]),a._v(" "),_("h3",{attrs:{id:"提问-应用是不共享物理资源的-如果新上来一个开发应用-新上的应用比较多-这个资源池会提前做好吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-应用是不共享物理资源的-如果新上来一个开发应用-新上的应用比较多-这个资源池会提前做好吗"}},[a._v("#")]),a._v(" 提问：应用是不共享物理资源的，如果新上来一个开发应用，新上的应用比较多，这个资源池会提前做好吗？")]),a._v(" "),_("p",[a._v("何小锋：也不是所有的应用都共享，我们只对核心应用的策略做一些划分，大的应用可能一台共享这个资源，如果应用上来我们会根据业务域，我们知道这个业务是否是重要的，这个业务是用于下单的还是生产的，它的业务域不一样的话，重要性也是不一样的。")]),a._v(" "),_("h3",{attrs:{id:"提问-何老师说要用好的网卡、好的服务器-请问你们用的是什么网卡-是英特尔的-戴尔-还是ibm-x86服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-何老师说要用好的网卡、好的服务器-请问你们用的是什么网卡-是英特尔的-戴尔-还是ibm-x86服务器"}},[a._v("#")]),a._v(" 提问：何老师说要用好的网卡、好的服务器，请问你们用的是什么网卡？是英特尔的，戴尔，还是IBM  x86服务器？")]),a._v(" "),_("p",[a._v("何小锋：我们用的是x86服务器，采用大厂商的服务器，如戴尔。网卡的话，目前新采购的都是万兆网卡，英特尔的比较多。")]),a._v(" "),_("h3",{attrs:{id:"提问-你们的虚拟化用的是什么样的软件-是kvm吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-你们的虚拟化用的是什么样的软件-是kvm吗"}},[a._v("#")]),a._v(" 提问：你们的虚拟化用的是什么样的软件？是KVM吗？")]),a._v(" "),_("p",[a._v("何小锋：KVM已经被我们放弃了，我们就是基于容器。")]),a._v(" "),_("h3",{attrs:{id:"提问-是在物理机上-是吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提问-是在物理机上-是吗"}},[a._v("#")]),a._v(" 提问：是在物理机上，是吗？")]),a._v(" "),_("p",[a._v("何小锋：对。")])])}),[],!1,null,null,null);t.default=v.exports}}]);