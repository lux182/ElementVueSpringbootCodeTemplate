(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{51:function(t,s,a){t.exports=a.p+"assets/img/h2-3.81d8e91e.png"},52:function(t,s,a){t.exports=a.p+"assets/img/h2-2.ed779ec3.png"},53:function(t,s,a){t.exports=a.p+"assets/img/h2-1.2c844489.png"},63:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"使用h2数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用h2数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用H2数据库")]),n("h2",{attrs:{id:"加入依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加入依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 加入依赖")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.h2database"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("h2"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-data-jpa"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),n("h2",{attrs:{id:"定义实体类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义实体类","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义实体类")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serializable"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" javax"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persistence"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" javax"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persistence"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GeneratedValue"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" javax"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persistence"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lombok"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" serialVersionUID "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("L"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n   * 创建者\n   */")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" creator"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"定义dao（-repository-）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义dao（-repository-）","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义Dao（ Repository ）")]),n("p",[t._v("可以使用 "),n("code",[t._v("PagingAndSortingRepository")]),t._v(" 或者 "),n("code",[t._v("CrudRepository")]),t._v("。")]),n("p",[t._v("增加了一个根据名称查找的方法。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repository"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PagingAndSortingRepository"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ConfigDao")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("PagingAndSortingRepository")]),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Long"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Config "),n("span",{attrs:{class:"token function"}},[t._v("findByName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"配置数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置数据库")]),n("p",[t._v("配置使用h2数据库，内存型的时候url为 "),n("code",[t._v("jdbc:h2:mem:mydb")]),t._v(" 。 文件类型为："),n("code",[t._v("jdbc:h2:file:~/mydb.h2")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("spring:\n  profiles:\n    active: dev\n  redis:\n    host: localhost\n    port: 6379\n  datasource:\n    url: jdbc:h2:file:~/mydb.h2\n    #url: jdbc:h2:mem:mydb\n    username: sa\n    password: sa\n    driverClassName: org.h2.Driver\n  jpa:\n    database: h2\n    show-sql: true\n    hibernate:\n      ddl-auto: update\n  h2:\n    console:\n      enabled: true\n      path: /h2-console\n      settings:\n        web-allow-others: true\n        trace: true\n")])]),n("h2",{attrs:{id:"引入guava，-把查询结果转为list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入guava，-把查询结果转为list","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入guava， 把查询结果转为list")]),n("p",[t._v("使用jpa查询结果中，返回的为 iterable，需要转换为list返回给前台。")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.google.guava"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("guava"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("16.0.1"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lists"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Collection"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 校验通过后打印重要的日志")]),t._v("\n  logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"getAll start ..."')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" data "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Lists"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"getAll end, data size:"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"使用h2的web-console"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用h2的web-console","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用h2的web console")]),n("p",[t._v("访问 http://127.0.0.1:8080/h2-console/")]),n("ol",[n("li",[t._v("JDBC URL： jdbc:h2:~/mydb.h2")]),n("li",[t._v("用户名：sa")]),n("li",[t._v("密码：sa")])]),n("p",[n("img",{attrs:{src:a(53),alt:""}})]),n("p",[t._v("可以选择中文界面，赞，填写好url，链接进去：")]),n("p",[n("img",{attrs:{src:a(52),alt:""}})]),n("p",[t._v("使用文件类型后，会在用户的目录下创建数据库文件，trace文件里面是文本，为数据库错误的一些日志堆栈。")]),n("p",[n("img",{attrs:{src:a(51),alt:""}})]),n("blockquote",[n("p",[t._v("注意：上线稳定的时候注意把控制台关掉。")])]),n("h2",{attrs:{id:"使用jpa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用jpa","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用jpa")]),n("p",[t._v("直接注入 Repository "),n("code",[t._v("ConfigDao")]),t._v(" ，具体参考工程代码 "),n("code",[t._v("ConfigService")]),t._v("。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("check"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notEmpty"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CheckUtil"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notNull"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Collection"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LoggerFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Autowired"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Service"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lists"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xiaowenjie"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("daos"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConfigDao"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * 配置业务处理类\n * \n * @author 晓风轻 https://github.com/xwjie/\n *\n */")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ConfigService")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Logger logger "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LoggerFactory"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getLogger")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConfigService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n  ConfigDao dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Collection"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 校验通过后打印重要的日志")]),t._v("\n    logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"getAll start ..."')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Config"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" data "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Lists"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("newArrayList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"getAll end, data size:"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("add")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Config config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 参数校验")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("notNull")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"param.is.null"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("notEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"name.is.null"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("notEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getValue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"value.is.null"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 校验通过后打印重要的日志")]),t._v("\n    logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"add config:"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 校验重复")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("check")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("null "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findByName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"name.repeat"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    config "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("save")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 修改操作需要打印操作结果")]),t._v("\n    logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"add config success, id:"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getId")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getId")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 参数校验")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("check")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("L"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"id.error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    dao"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 修改操作需要打印操作结果")]),t._v("\n    logger"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"delete config success, id:"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}],o=a(0),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=c.exports}}]);