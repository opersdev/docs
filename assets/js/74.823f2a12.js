(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{568:function(v,_,p){"use strict";p.r(_);var S=p(22),Q=Object(S.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("社交领域一直是互联网创业的大热门，从PC到移动端，从OICQ、MSN到QQ。到了移动互联网时代，社交领域应用开始彻底爆发，直奔黄金期。腾讯在过去几年里，社交平台更是火到爆，QQ和微信坐拥几亿的粉丝，QQ空间和朋友圈各种刷屏，写心得，晒照片，秀视频，那么谁来为企鹅保驾护航呢？支撑QQ和微信海量数据背后的架构又有哪些惊天内幕呢？本期大讲堂的内容来自今年2月份ChinaUnix对腾讯社交网络运营服务中心资深数据运维专家周小军的专访。本期访谈将从运维的视角，为我们揭晓腾讯社交产品前端到后端的故事。")]),v._v(" "),p("p",[v._v("Q1: 您好，很高兴有机会采访到您，我了解到您，您在天涯腾讯拥有非常丰富的运维工作经验了，能否介绍下自己？分享下自己工作中的苦与乐？")]),v._v(" "),p("p",[v._v("A1: 我叫周小军，目前就职于腾讯社交网络平台技术运营中心，负责社交产品分布式存储的运维及团队管理工作。")]),v._v(" "),p("p",[v._v("我在运维领域工作了十多年，算是一个运维老兵。刚毕业时我进入国寿当系统管理员，负责系统和业务运维，也做过业务系统开发。较早接触了SCO Unix操作系统和Informix数据库，还做了一些业务系统开发。后来感觉在国企没有技术，没技术挑战，技术部门也不是国企的核心，于是工作一段时间后离开了国寿。")]),v._v(" "),p("p",[v._v("到了2002年，我进入天涯社区，主要负责网站运维。在天涯的职业生涯中，我从运维主管做到了云计算副总监，在此期间组建起了一支精锐的运维队伍，包括系统、网络、数据库、安全和运维开发等运维小团队。")]),v._v(" "),p("p",[v._v("随着越来越多的网友涌向天涯社区，天涯流量开始突飞猛进了，我不断推进网站的架构演进，从初始的二层架构发展到包括GSLB、LVS、Haproxy、Squid、应用WEB、数据缓存及数据库等多层可扩展的架构，从ASP/MSSQL/Windows平台迁移到JSP/MySQL/Linux开源平台，从脚本化运维进化到了工具化运维，我们建设了一套包括资源管理、监控、告警、配置管理、自动部署等服务在内的运维管理系统，探索了虚拟化技术的实践，保证了天涯从最初的日百万PV演进到日亿级PV架构。")]),v._v(" "),p("p",[v._v("有句话说得好，叫摸着石头过河。在天涯十多年的运维工作中，我们也踩到了许多大坑：比如被几倍出口的DDOS打了几小时、服务器被入侵、域名被劫持、数据中心断电、天涯拖库、谷歌出走等大事件，还有许多员工犯下的人为致命错误。回过头来看，当初踩坑多了，心理反倒变得极其强大，遇到大故障已如钢丝一般冷静，在反思总结教训的基础上不断提升自己的运维能力。")]),v._v(" "),p("p",[v._v("回顾我在天涯的时光里，遇到技术上最大的困难是双平台并运行的问题，天涯从Windows迁移到Linux过程中，由于架构复杂、产品繁多、技术资源投入不足，整个迁移过程持续了数年。在这个过程中，运维团队不得不在双平台上投入大量精力，比如开发运维工具要在Linux写一套Python，在Windows上写一套C#，运维精力很难兼顾。现在反思，有几点经验，希望做运维的伙伴们能够共勉，做系统重构时必须要有坚定的目标，强有力的一把手决策，投入精兵强将小分队，正确的说服老板，敢于血战，经受短时间的剧烈阵痛。")]),v._v(" "),p("p",[v._v("2012年我进入腾讯负责社交产品分布式存储运维，这里是亚洲最大的分布式存储集群，上万台内存和磁盘存储服务器分布在全国几个区域的存储仓库内。每秒有几千万的数据读写请求，服务于QQ、空间、腾讯云、相册和广点通等海量业务。")]),v._v(" "),p("p",[v._v("与此同时，腾讯业务的海量数据给我们运维人员带来了很大的挑战，这些挑战都是我们未曾经历过的。我们不断采用创新性的方法来解决这些难题，在存储运维上开辟新的思路，不断从效率、成本、质量和安全四个维度力求做得更专更精，不断追求更卓越，非常给力地支持了业务的高速发展。")]),v._v(" "),p("p",[v._v("Q2: 腾讯在过去的几年里，社交平台火到爆，QQ和微信都已经拥有了几亿的粉丝，那么如何应对QQ空间海量用户上传图片、上传视频、上传文字等高并发负载？")]),v._v(" "),p("p",[v._v("A2: 针对文字、图片和视频的不同应用场景，我们提供了不同的存储解决方案。其中有面向数据的NoSQL分布式存储和关系数据库，也有面向图片的图片存储平台，还有面向视频的文件存储平台。")]),v._v(" "),p("p",[v._v("不同的存储系统各有特点，NoSQL存储注重高性能、低延迟和高可用，图片和文件存储量更注重低成本和数据安全。")]),v._v(" "),p("p",[v._v("腾讯NoSQL存储由腾讯内部研发团队开发，现在有基于内存和SSD二级存储的CKV（Cloud Key-Value）、Grocery和Quorum_KV，有基于SSD存储介质的TSSD等。")]),v._v(" "),p("p",[v._v("CKV主要服务于空间、相册、腾讯云等互联网业务，Grocery主要服务于QQ即通业务，Quorum_KV主要服务于微信消息业务。")]),v._v(" "),p("p",[v._v("经过精心设计的存储单机性能可以达到每秒十几万次的读写，完全可以应对高并发负载。比如CKV的内存存储采取了以下的设计思想以支持高并发能力：\n1）内核态网络处理模块，以内核模块形式提供服务；\n2）大量运用zero-copy思想，在数据传递，编解码时基本达到理论上的最少次数；\n3）快速hash；\n4）内存快速分配；\n5）多队列网卡；\n6）处理器绑定；\n7）自旋锁；\n8）存储主机无磁盘IO的设计，备机才落流水和内存镜像到磁盘。")]),v._v(" "),p("p",[v._v("Q3: 八年前，腾讯就开始在社交产品中应用到了NoSQL数据库了，大家可以通过微信朋友圈或者QQ空间轻松自由地分享视频、文字、音频、图片等，那么微信与QQ在架构上究竟有哪些相似点与不同点呢？\nA3: 微信使用的NoSQL存储名称为Quorum_KV，是基于LSMTree研发的强一致性、持久化KV分布式存储，支持key-table 和 string-value两种存储模型。")]),v._v(" "),p("p",[v._v("Quorum_KV通过Quorum协议实现双向可写功能，一个最小的存储单元由二台存储机和一台仲裁机组成，写存储机时经过仲裁决定被写的机器。")]),v._v(" "),p("p",[v._v("写数据时直接写内存的Memtable表。Memtable写满后转换成Immutable。Immutable定期Dump到本地磁盘变成数据文件，数据文件不断递增形成不同level级别数据文件，不同level级别的数据文件会定期合并。")]),v._v(" "),p("p",[v._v("内存表使用Skiplist来做内存的Key索引。\n读数据时先读内存表，如果找不到记录再寻找Immutable，然后是level 0磁盘文件、level 1……直至寻找到记录返回结果。所以可以看到，Quorum_KV的设计是面向写量大，读量小的业务场景，很好地适应了微信消息写量大的特点。")]),v._v(" "),p("p",[v._v("再来谈谈QQ，它使用的NoSQL存储名称为Grocery，属于最终一致性，持久化KV分布式存储，支持Key-value和Key-key-Row数据结构。\n一个最小的存储单元由二台或多台存储主、备组成，主备可组成一主多备的链状结构。数据写入主后同步到备。客户端可同时读取主备，因此读到备的客户端会有一定的数据延迟，适合对数据一致性要求不高的业务。")]),v._v(" "),p("p",[v._v("数据的读写都在内存中进行，内存的Key采用多阶HASH来索引，读写性能极高，但受数据容量受内存的限制。数据在主、备上都落盘，保证了数据的持久性。一个存储集群可以支持业务混合存储，业务Key采用一致性HASH方式分布。可以看到，和Quorum_KV不同，Grocery的设计是面向写量、读量均大的业务。")]),v._v(" "),p("p",[v._v("Q4: 从存储的“五分钟原则”可知，当数据五分钟内被访问一次，该数据不应存储在硬盘，而应该存储在内存中，对坐拥几亿用户的QQ和微信等社交产品，可能要应对每秒几千万的读写请求，能否和我们分享下背后的集群是如何支撑起这种大规模的分布式存储？\nA4: QQ在线峰值高达二亿多，每秒要响应几千万的读写请求，对分布式存储的压力非常大。传统的关系型数据库在高性能、分布式方面存在一些瓶颈，很难适应QQ海量业务场景所带来的挑战。")]),v._v(" "),p("p",[v._v("如我之前说提及的，腾讯的NoSQL存储系统经过精心设计，已经能够应对海量数据的高并发、高可用、低延迟的应用场景，由几百台存储机组成的存储集群可以轻松扛起数百万的读写并发。集群的性能具有线性扩展，集群最大可以容纳到几千台存储服务器。当然如此庞大的集群，相应地也会带来管理上的复杂，因此我们的一个集群不会超过1千台服务器。")]),v._v(" "),p("p",[v._v("在集群中，记录通过一致性HASH、号段范围或HASH取模等方式，均匀分布到后端的数百台存储设备。存储前端采用存储代理，屏蔽了应用对存储的直接访问，数据在集群扩展或收缩的过程中，通过代理的自动寻址保证了业务无对存储的无损访问。业务数据从1台存储扩展到100台存储，只需要数分钟即可完成，在此过程，业务是无感知的。")]),v._v(" "),p("p",[v._v("此外，应对存储集群的运维，我们还有强大的存储调度平台，可以保证集群中的代理和存储做到平均水位，避免有的机器忙死，不断应对高负载的压力、而有的机器应对低负载，出现闲置等问题。")]),v._v(" "),p("p",[v._v("最后，针对存储的内存问题，我想补充一点，业务的数据具有冷热区域，存储系统把热数据保存在内存中，冷数据保存在SSD盘中。淘汰系统通过KEY的过期时间自动把冷数据从内存淘汰到SSD盘，以释放内存空间。当冷数据第一次从SSD盘读取后会自动上升到内存。")]),v._v(" "),p("p",[v._v("Q5: 在国内网络环境下，单机房的可靠性无法满足大型互联网服务的要求，如机房掉电，光缆被挖的情况也发生过，微信和QQ有没有出现过服务器宕机的时候？您们当时是如何应急处理的？有没有更好的容灾机制来确保高可用性？\nA5: 早期的QQ在单IDC时代，的确有过光缆被挖断、甚至城市运营商出口故障导致服务中断数小时的大故障。现在腾讯已经建设起成熟的海量服务运营体系，面对单机房的可靠性采用了全网调度理念来解决跨地域之上的高可用性。")]),v._v(" "),p("p",[v._v("首先是SET标准化。SET是标准业务部署模块，接入层、逻辑层和存储层标准化成不同的SET。")]),v._v(" "),p("p",[v._v("每个SET内都有固定数量的服务器和标准服务容量。譬如，上海XX接入SET设计容量XXX万用户，当前用户数为XXX万，离警戒水位还有XX%，XX小时后可进入扩容点。")]),v._v(" "),p("p",[v._v("SET都具有自动化部署能力，几百台服务器的SET部署时间小于10分钟。SET按单元分布在不同城市之间。每个重点城市都会部署许多套接入SET，逻辑SET和存储SET。")]),v._v(" "),p("p",[v._v("第三，SET间、城市间、区域间都具备全网调度能力。用户到接入SET的调度通过GLBS来切换，譬如接入SET会有许多个VIP，通过域名服务变更VIP就可以把用户请求从天津切到上海。")]),v._v(" "),p("p",[v._v("接入SET到逻辑SET，或逻辑SET到存储SET的访问则通过内部名字服务系统来切换。这样当任何一个IDC或某城市出现问题时，运维人员通过调度可以在几分钟内把流量切到正常的SET，甚至可以通过调度系统做到自动化切换。")]),v._v(" "),p("p",[v._v("第四，存储层的多地同步。存储层会在三地以上部署多套，譬如华南、华中和华北各部署一套存储SET。有写请求时先写华南SET，写成功后通过同步中心把数据同步到华中和华北SET，通过最终一致性保证数据保存在多地存储。数据在三地同步最长时间才几千毫秒，因此用户对数据的不一致基本无感知。")]),v._v(" "),p("p",[v._v("最后是系统的柔性策略。柔性可用即对服务进行分级，当系统变得不可靠的时候，优先提供重要优先级的服务。比如节假日用户大量访问相册出现流量峰值时，突然出现某机房核心专线故障，柔性系统会把相册从全尺寸图片浏览模式切到缩略图浏览模式，以减少图片的拉取，降低带宽流量，减少压力。")]),v._v(" "),p("p",[v._v("Q6: 在朋友圈的相册、QQ空间的相册里，或多或少会有一些个人隐私的数据，一旦丢失，后果很严重，那么它们对应的服务器集群是如何来确保数据的备份与安全性？\nA6: 分布式存储系统都具有主备双机或主备多机架构。备机把更新流水落本地硬盘，并定期把内存镜像到磁盘。后端有统一的冷备系统来保存备份数据。因此数据的安全性是非常强的。")]),v._v(" "),p("p",[v._v("关键业务还有三地以上的存储SET同步，实现跨城容灾。\n图片保存在分布式图片存储系统中，同样也会保存三份以上的副本，并且有跨地域的容灾副本。")]),v._v(" "),p("p",[v._v("Q7: 您在互联网行业积累了十多年的运维经验了，对很多朋友来讲，要想成为一名优秀的DevOps工程师，在成长道路上，您有哪些心得经验分享？\nA7: 在运维道路上，我的切身体会比较多，简单总结一下主要有以下几点：\n1、坚定的目标\n目标是职业生涯远处的灯塔，它能冲破迷雾，让你在迷惘中坚定信念和方向。要想成为一名优秀的技术专家就要牢牢树立你的目标，持之以恒，每天一点一滴地前进。")]),v._v(" "),p("p",[v._v("2、运维服务能力\n餐饮业的海底捞以服务口碑得到顾客的认可。同样，运维人员做为支撑服务部门，也要通过服务来获得用户和业务的认同。我们要以超出用户预期的目标来为用户和业务提供服务。")]),v._v(" "),p("p",[v._v("可能有人要问，我们是技术人员，为什么要特别强调服务能力？我觉得技术运维的团队目标不是提供功能的业务，而应该是提供持续化的服务能力，如资源交付能力，变更能力，可用性能力，调度能力等等，让业务如同水和电一样使用我们的服务。在这些服务能力的背后需要长时间的建设和积累。\n例如传统的DBA团队重在技术支持，而我们数据运维团队除了技术支持之外，提供专业的服务已经成为团队的核心目标。\n在服务能力上要致力于做到超出用户预期。什么是超出用户预期？就是用户期望得到五星的服务，而你能给他们提供到六星的服务。")]),v._v(" "),p("p",[v._v("要获得超出预期的服务，我认为要做好以下二方面：\n1）主动服务\n在我们运营中心，有句口话为“服务用户、服务业务、服务自己”，也就是说在做事时要考虑，我们的服务目标是谁。我们在制定目标和方向的时候不能只考虑到自己，要把眼光放得更长，看到业务，看到用户。\n这里有一个例子，业务在申请设备资源时，按部就班走硬件成本资源采购是B级服务；通过虚拟化技术把设备申请从周提升到小时是A级服务；在虚拟化技术之上通过调度能力保证业务上线后，能根据实际流量实现人工或自动化的资源伸缩，即节省了成本，提高业务部署速度，还提升了运维能力，这就是S级超出预期的服务。")]),v._v(" "),p("p",[v._v("2）提供超出预期的服务，还要主动站在用户角度替用户思考，给用户带来价值，实现多方共赢。\n譬如我们在设计代码发布系统时应该要思考，发布系统的初步目标是减少了运维团队的工作量，同时也提升了应用团队的发布效率。但通过更深入的思考我们还会发现，如果具备灰度发布能力，我们可以做到对用户无损。发布过程中引入自动化测试，我们可以保证了应用的可用性。通过多队列服务和生产者/消费者模式，我们可以瞬间完成数千台服务器的发布，等等。做这些事情时，站在多方面来思考会让运维工作变得有价值，而不是背黑锅的角色。")]),v._v(" "),p("p",[v._v("3、一万小时的专业技术积累和丰富的实战\n丹尼尔在《一万小时天才理论》提出一万小时定律，即要成为某个领域的专家，需要积累一万小时，如果每天工作中花在学习和实践上的时间达到4小时，那么成为一个领域的专家至少需要十年。")]),v._v(" "),p("p",[v._v("因此我们在工作中要善于利用时间，尽量保证20%的工作时间用在提升专业能力和运维效率方面。即使是加班时间也要把时间用在提升效率的工作上，避免加班仍是做重复性而无技术含量的事情。")]),v._v(" "),p("p",[v._v("“纸上得来终觉浅，绝知此事要躬行”。要把技术运用得弓马娴熟，武艺精通，就得把知识落地，应用到实践中，在工作中不断提出新想法，勇于尝试新事物，不断给自己新的挑战。")]),v._v(" "),p("p",[v._v("4、不断打破心理舒适期寻求突破\n工作到一定程度后就会进入心理舒适期，这是让人感到熟悉、驾轻就熟时的心理状态。这个时候就要勇于打破心理舒适期，从这个方面去突破自己的天花板。")]),v._v(" "),p("p",[v._v("打破心理舒适期就要保持自我动因，譬如对技术的热爱，保持强烈的好奇心，给自己设立中长期目标，对工作和事业的自我驱动力等。")]),v._v(" "),p("p",[v._v("在突破的领域上，运维人员不仅只是局限于运维技术层面，在沟通表达、项目管理、业务、产品、开发等方面都要获得成长。")]),v._v(" "),p("p",[v._v("打破舒适期甚至要勇于跳离舒适的岗位、稳定的公司，寻求更好的职业发展平台，这样才把保证自己的价值不断获得增值，打破“IT只是吃青春饭”的悲观宿论。")]),v._v(" "),p("p",[v._v("5、开发能力\n运维自动化有三个阶段，脚本化是第一阶段，工具化是第二个阶段，产品化是第三个阶段。运维人员要掌握开发能力，来提升运维效率，解放运维生产力。")]),v._v(" "),p("p",[v._v("运维的开发语言可选Python、PHP甚至C/C++等。有些优秀的运维人员可能是全栈工程师，从前端到后端，从WEB开发到后台开发都可以自己解决。")]),v._v(" "),p("p",[v._v("除了开发能力，运维人员还要深入了解运维需求和业务需求，规划设计具有前瞻性的运维产品，用产品的理念来做运维系统。优秀的运维系统需要具备出色的用户体验，并通过模块化、松耦合的设计，方便其他工程师在平台上的二次开发，以提升运维开发效率和运维效率。")]),v._v(" "),p("p",[v._v("好的运维产品可以开源出来，回馈业界，为外界弱小的运维团队提供更大的帮助以及贡献度。")]),v._v(" "),p("p",[v._v("精通开发还便于理解业务，和开发一起共同推动业务架构的优化，成为开发的紧密合作伙伴。")]),v._v(" "),p("p",[v._v("具备开发能力还可以让运维工程师掌握进入系统内部的钥匙。运维工程师通过阅读Linux内核源码、MySQL源码或者Redis源码等，能更深入掌握操作系统、数据库和网络框架等服务的运行机制，根据业务特点改写功能特性，使之更能符合业务需求。好的特性还能回馈提交社区，以结合到下一个版本中。")])])}),[],!1,null,null,null);_.default=Q.exports}}]);