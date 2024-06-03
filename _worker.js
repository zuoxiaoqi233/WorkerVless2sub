
// 部署完成后在网址后面加上这个，获取订阅器默认节点，/auto

let mytoken= ['auto'];//快速订阅访问入口, 留空则不启动快速订阅

// 设置优选地址，不带端口号默认443，TLS订阅生成
let addresses = [
	'cf.090227.xyz',
	'ct.090227.xyz',
	'cmcc.090227.xyz',
	'www.visa.com.sg',
	'www.visa.com.hk',
	'www.visa.com.tw',
	'www.visa.co.jp',
	'achk.cloudflarest.link',
	// '2083.zxqapp.top',
	// '8443.zxqapp.top',
	// '8080.zxqapp.top',
	// '8880.zxqapp.top',
	// '2053.zxqapp.top',
];

// 设置优选地址api接口
let addressesapi = [
	'https://cf-workers-text2kv-e74.pages.dev/ip.txt?token=7758258m', //可参考内容格式 自行搭建。
	// 'https://addressesapi.090227.xyz/cmcc', 
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesipv6api.txt', //IPv6优选内容格式 自行搭建。
];

// 设置优选地址，不带端口号默认80，noTLS订阅生成
let addressesnotls = [
	// 'www.visa.com.sg#官方优选域名',
	// 'www.wto.org:8080#官方优选域名',
	// 'www.who.int:8880#官方优选域名',
];

// 设置优选noTLS地址api接口
let addressesnotlsapi = [
	'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/addressesapi.txt', 
	// //可参考内容格式 自行搭建。
];

let DLS = 2;//速度下限
let addressescsv = [
	'https://cf-workers-text2kv-e74.pages.dev/AS0-0-SIN.csv?token=7758258m&b64=SVDlnLDlnYAs56uv5Y+jLOWbnua6kOerr+WPoyxUTFMs5pWw5o2u5Lit5b+DLOWcsOWMuizln47luIIsVENQ5bu26L+fKG1zKSzpgJ/luqYoTUIvcykNCjUyLjc0LjE3MC4xMjMsNDQzLDQ0Myx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDUyLDQuMjINCjQ3LjIzNi4xNDYuMjQ5LDIwODMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDExMiwyLjIwDQo4LjIxOS40Mi43MiwyMDgzLDAsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw2MiwyLjA3DQo0Ny4yMzYuMTY2LjEzMSw4MCwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDExNiwxLjQ2DQo0Ny4yMzYuMTgwLjUxLDIwNTMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDIwNCwxLjQ1DQo0Ny4yMzYuMTgwLjUxLDIwODYsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMjgsMS4yMg0KOC4yMTkuMTc0LjIxMyw4ODgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTE1LDEuMDkNCjQ3LjIzNi4yNTMuNDEsMjA4NywwLHRydWUsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTA4LDEuMDkNCjE3Mi45My4xNjUuMjI4LDQ0Myw0NDMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzMSwxLjAwDQo0Ny4yNDUuODYuMjMwLDg4ODAsODg4MCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwzODUsMC45OA0KNDcuMjM2Ljk3LjkwLDIwOTUsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMjMsMC45Ng0KNDcuMjQ1Ljg2LjIzMCwyMDUyLDIwNTIsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMzgyLDAuOTENCjguMjE5LjExNC4yMDEsODA4MCwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDYwLDAuODkNCjguMjE5LjExMy4yMzIsMjA4NywyMDg3LHRydWUsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNjEsMC44OQ0KNDcuMjM2LjE4MC4yNCwyMDk2LDAsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMTcsMC44MQ0KNDcuMjM2LjEwNC4xMSwyMDg2LDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTM3LDAuNzkNCjQ3LjIzNi4xNjkuMTQxLDgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTI3LDAuNzkNCjguMjE5Ljk5LjE2OSwyMDg2LDIwODYsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTI3LDAuNjkNCjguMjE5LjExMS4xNDcsMjA5NiwwLHRydWUsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNjYsMC42Mg0KOC4yMjIuMTkzLjY1LDg0NDMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDY0LDAuNTkNCjIwMi44MS4yMzUuOTAsNTAxMDAsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDU4LDAuNTcNCjQ3LjIzNi4xODkuOTIsODA4MCwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDE5MiwwLjU0DQo0Ny4yMzcuMTAwLjIwNiw4NDQzLDAsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyODUsMC41Mw0KOC4yMTkuMjAyLjEzMCwyMDgyLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTI5LDAuNDgNCjguMjE5Ljg2LjIwMCw4ODgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNjQsMC40NA0KNDcuMjM3LjgzLjIwLDIwOTYsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI4MiwwLjQzDQo0Ny4yNDUuODYuMjMwLDg0NDMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDMxOCwwLjQzDQo0Ny4yMzYuMjU0LjEyMCwyMDk2LDAsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMTgsMC40Mg0KNDcuMjM2Ljc1LjExMywyMDgyLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTMwLDAuNDANCjQ3LjIzNi4xNTguMTU4LDg0NDMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDEzMywwLjM5DQo0Ny4yMzYuMTAuMTAwLDIwODYsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMzMsMC4zOQ0KNDcuMjM2LjE2OC4xNyw4ODgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjA1LDAuMzgNCjQ3LjIzNi45LjE1Miw4ODgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTM3LDAuMzcNCjguMjE5LjIwMi4xMzAsMjA4NiwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDExNSwwLjM3DQo0Ny4yMzYuMTIzLjEzMywyMDk1LDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTMwLDAuMzYNCjQ3LjIzNi4xODAuMjQsMjA4NiwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDEyNiwwLjM1DQo0Ny4yMzYuMTcyLjcxLDgwODAsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMjIsMC4zNA0KNDcuMjM3LjkyLjI2LDg0NDMsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI4MCwwLjMzDQo0Ny4yMzYuMTY2LjEzMSwyMDk1LDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTI3LDAuMzINCjQ3LjIzNy44Mi4xNSwyMDUyLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjc3LDAuMjkNCjQ3LjIzNi45My4xNzYsMjA4NywwLHRydWUsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTMwLDAuMjkNCjQ3LjI0NS44Ni4yMzAsODAsODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMzg4LDAuMjkNCjQ3LjIzNi45LjE1MiwyMDg3LDAsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMTQsMC4yOA0KNDcuMjM2LjEwLjE4MiwyMDgyLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTEwLDAuMjYNCjQ3LjIzNi4xMTcuNDgsODAsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMzQsMC4yNg0KNDcuMjM3Ljk1LjE0MCw4ODgwLDAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMjgyLDAuMjUNCjQ3LjIzNy4xNC4yMjAsMjA5NSwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI5MSwwLjI0DQo0Ny4yMzYuMjMyLjE0OCw4ODgwLDg4ODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTMyLDAuMjMNCjQ3LjIzNy44Ni4xODUsMjA1MiwwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDI5MiwwLjIyDQo4OS4zNC4yMjcuMTMzLDQ0Myw0NDMsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw2MSwwLjIxDQo4LjIxOS40MC4zNywyMDg3LDIwODcsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw2MiwwLjIwDQo4LjIyMi4xMzQuMTcwLDg4ODAsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw2MywwLjE5DQo4LjIxOS4xMTQuMjAxLDIwODMsMjA4Myx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDc4LDAuMTkNCjQ3LjIzNi4xNDYuMjQ5LDgwODAsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxNDEsMC4xOA0KOC4yMTkuMTEzLjIzMiwyMDgyLDIwODIsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNTgsMC4xOA0KOC4yMTkuMTAwLjE2OCwyMDk1LDIwOTUsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNzIsMC4xOA0KOC4yMTkuOTkuMTY5LDIwOTUsMjA5NSxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw1OSwwLjE4DQo0Ny4yMzYuMjM3LjkwLDIwOTYsMCx0cnVlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDExMywwLjE2DQo0Ny4yMzYuODMuMjM5LDgwLDgwLGZhbHNlLFNJTixBc2lhIFBhY2lmaWMsU2luZ2Fwb3JlLDExOSwwLjE2DQo0Ny4yMzcuOTQuMTQwLDgwODAsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwyNjksMC4xNg0KOC4yMTkuMTExLjE0NywyMDg3LDIwODcsdHJ1ZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSw2OSwwLjE1DQo0Ny4yMzYuMTAuMTAwLDIwODIsMCxmYWxzZSxTSU4sQXNpYSBQYWNpZmljLFNpbmdhcG9yZSwxMTYsMC4xNQ0KOC4yMTkuMTE0LjIwMSwyMDk1LDIwOTUsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsNjgsMC4xNA0KNDcuMjM2LjE2OC4xNyw4MDgwLDgwODAsZmFsc2UsU0lOLEFzaWEgUGFjaWZpYyxTaW5nYXBvcmUsMTE0LDAuMTM=',
	'https://cf-workers-text2kv-e74.pages.dev/AS0-0-LAX.csv?token=7758258m&b64=SVDlnLDlnYAs56uv5Y+jLOWbnua6kOerr+WPoyxUTFMs5pWw5o2u5Lit5b+DLOWcsOWMuizln47luIIsVENQ5bu26L+fKG1zKSzpgJ/luqYoTUIvcykNCjM0LjExMC4yMzQuMTIwLDgwLDgwLGZhbHNlLExIUixFdXJvcGUsTG9uZG9uLDIxMCwxLjA3DQoxNTQuMjkuMTQ0LjgzLDEyMzE3LDIwOTUsZmFsc2UsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMjAzLDAuODYNCjkxLjE0OS4yMzkuNzIsNDQzLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDI0NiwwLjg0DQoxNTQuMjkuMTQ2LjE2LDEwNTk0LDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDIwNywwLjY3DQo5MS4xNDkuMjM5LjcwLDQ0Myw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxNzgsMC42Ng0KMTU0LjkuMjUxLjIxNSwzNDIzNywyMDk2LHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMjAyLDAuNjYNCjkxLjE0OS4yMzkuMTk4LDQ0Myw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxOTIsMC42Mw0KOTEuMTQ5LjIzOS42Miw0NDMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTg1LDAuNjINCjIuNTkuMTUxLjEzNiwyMjA5MSw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywyMjcsMC41OQ0KMTI5LjE0Ni4yNTQuMzksNDQzLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE5MiwwLjU1DQozOC40Ny4xMTUuMTUyLDM0MjM3LDIwOTYsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxNzIsMC41Mw0KMjA5LjIwOS41OS4xMTIsMTQwNTAsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTcyLDAuNTENCjE3Mi44Mi4xNi45OSw0NDMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTcyLDAuNDgNCjIwMi45MS4zNS4yMjMsNDQwNzAsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTg3LDAuNDYNCjE1NC45LjI1MS4yMTAsMzQyMzcsMjA5Nix0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE3OCwwLjQ1DQoxMDQuMTY2LjEyNS4yMTAsNDQzLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDIxNiwwLjQ0DQoxNTQuOS4yMzAuNTcsMzQyMzcsMjA5Nix0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE4MiwwLjQ0DQozOC40Ny4xMTQuODAsMzQyMzcsMjA5Nix0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE3MiwwLjQyDQoxNTQuMjkuMTQ2LjI0MCwyMjc1MCw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxODUsMC4zOQ0KMTU0LjQwLjM1LjI3LDUwMDA3LDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE3MSwwLjM4DQoxNzIuMjMzLjEyOS4xNDYsNDQzLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE4NiwwLjM4DQoxNTQuMTIuMzkuMTQ1LDQ3OTcxLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE2NiwwLjM3DQoxNTQuMTIuMzkuMjQxLDEzNzg5LDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE3NSwwLjM3DQoxNTQuOS4yNDEuMTQsMzQyMzcsMjA5Nix0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDIwNCwwLjM2DQoxNTQuMTIuNTkuMTAxLDQ0Myw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxNjMsMC4zNQ0KMTU0LjkuMjQwLjE4MCwxMzI4MCw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxNjYsMC4zNQ0KMjMuMjI1LjExNi42OCw0NTg1Myw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxNjcsMC4zMw0KMTU0LjI5LjE0Ni4yNDAsMTc2OTcsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTkwLDAuMzINCjE4NS4yMzguMjUwLjE2OCwzMTQ0NSw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywyMTIsMC4zMg0KMTU0LjQwLjU3LjI0NSwzNDIzNywyMDk2LHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTkwLDAuMzANCjE1NC43LjE3OS43Niw0NDMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTc2LDAuMjkNCjIzLjk0LjIxMy4xOTIsMjAwMSwyMDUzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTc1LDAuMjgNCjE1NC45LjI1MS4yMTQsMzQyMzcsMjA5Nix0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE4NSwwLjI1DQoxMDcuMTUwLjEwMC4xMTgsODA4MCw0NDMsdHJ1ZSxMQVgsTm9ydGggQW1lcmljYSxMb3MgQW5nZWxlcywxOTcsMC4yMw0KMTY4LjIyMC44OC42Miw0NDMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsNzQsMC4yMA0KMTkyLjIxMC4xODcuNzIsNDQzLDQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDIyNSwwLjExDQozNC4xNjAuMTE4Ljc3LDgwLDgwLGZhbHNlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDE5NywwLjA2DQoxNTIuNzAuMTQ4LjQ2LDIwNTMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTg3LDAuMDUNCjIwLjE0LjkzLjg5LDIwNTMsODQ0Myx0cnVlLExBWCxOb3J0aCBBbWVyaWNhLExvcyBBbmdlbGVzLDIwNSwwLjAwDQo2Ni4xNTQuMTE2LjE2NSw0NDMsNDQzLHRydWUsTEFYLE5vcnRoIEFtZXJpY2EsTG9zIEFuZ2VsZXMsMTgyLDAuMDA=',
	'https://cf-workers-text2kv-e74.pages.dev/AS0-0-HKG.csv?token=7758258m&b64=SVDlnLDlnYAs56uv5Y+jLOWbnua6kOerr+WPoyxUTFMs5pWw5o2u5Lit5b+DLOWcsOWMuizln47luIIsVENQ5bu26L+fKG1zKSzpgJ/luqYoTUIvcykNCjguMjEwLjEwNy4yNDYsODQ0Myw4NDQzLHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNDEsMi4wMw0KNDcuNzYuMTc4LjE0NiwyMDgyLDAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMTA2MywxLjkwDQo0Ny4yNDIuMTcxLjk0LDIwODYsMjA4NixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2MywxLjg2DQo0Ny4yNDMuMTM5Ljg1LDIwODYsMjA4NixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw0NiwxLjgwDQo0Ny43Ni4zMi4xMDgsMjA5NSwyMDk1LGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDM0LDEuMzcNCjguMjE4LjE4OC4xMjksODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDI2LDEuMjkNCjguMjE3LjIyMS4xNjUsMjA4NywyMDg3LHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNDEsMS4xNQ0KOC4yMTguMjAxLjczLDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1MSwxLjE0DQo4LjIxOC4xNDIuMjUzLDg0NDMsODQ0Myx0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDYwLDEuMTANCjQ3Ljc2LjMyLjEwOCw4NDQzLDg0NDMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywyMywxLjA0DQo0Ny43Ni4zMi4xMDgsODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDQ0LDAuOTYNCjQ3LjI0My4yMzQuOSw4ODgwLDg4ODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMzgsMC45Mg0KNDcuNzYuMzIuMTA4LDgwODAsODA4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw2NSwwLjg5DQo4LjIxMC4xMDcuMjQ2LDg4ODAsODg4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1NCwwLjg4DQo4LjIxOC4xNDIuMjUzLDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzNCwwLjg2DQo0Ny4yNDIuMTc2LjIzNywyMDUzLDIwNTMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzOCwwLjgyDQo0Ny4yNDIuMzYuNzgsODQ0Myw4NDQzLHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjUsMC44Mg0KOC4yMTguMTg4LjEyOSw4MDgwLDgwODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNTQsMC44MQ0KOC4yMTguMTQyLjI1Myw4MDgwLDgwODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMzAsMC44MQ0KNDcuMjQzLjIzNC45LDIwODcsMjA4Nyx0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDM2LDAuNzgNCjguMjE3LjI1MS42Miw4MCw4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywyNywwLjc4DQo4LjIxOC4yMDEuNzMsODAsODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNDEsMC43NQ0KOC4yMTcuMTU5LjIxMCwyMDg2LDIwODYsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNDQsMC43NA0KOC4yMTguMTIyLjU1LDIwNTIsMjA1MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzOCwwLjczDQo4LjIxNy4yMzkuMTE2LDg4ODAsODg4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw0NSwwLjcyDQo0Ny43Ni4xNTkuMTQ2LDIwODMsMjA4Myx0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDU4LDAuNzINCjguMjE4LjE0Mi4yNTMsODAsODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsNTAsMC43MA0KOC4yMTguMjAxLjczLDIwNTIsMjA1MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw0NSwwLjY4DQo0Ny4yMzguNi4xMDIsODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDI3LDAuNjcNCjQ3LjI0Mi4yMDIuMjMwLDgwLDgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDMwLDAuNjYNCjguMjE3LjE0OS4yOCw4MCw4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzMCwwLjY1DQo4LjIxMC4xMDcuMjQ2LDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw0MCwwLjY1DQo0Ny4yNDMuNS4xNTQsMjA4MywyMDgzLHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjcsMC42NA0KNDcuMjM4LjYuMTAyLDgwODAsODA4MCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1OCwwLjY0DQo4LjIxOC4xMjIuNTUsODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDU4LDAuNjMNCjQ3Ljc2LjE1OS4xNDYsMjA5NSwyMDk1LGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDYzLDAuNjMNCjQ3LjI0My41LjE1NCwyMDg3LDIwODcsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzNiwwLjYyDQo4LjIxOC4xODguMTI5LDIwODIsMjA4MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzNywwLjYyDQo0Ny4yNDMuNjcuMjgsMjA1MiwyMDUyLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDYwLDAuNjENCjQ3LjI0My42Ny4yOCwyMDgzLDIwODMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1MiwwLjYwDQo0Ny43Ni4zMi4xMDgsMjA5NiwyMDk2LHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjksMC41OQ0KNDcuMjQyLjM2Ljc4LDIwOTYsMjA5Nix0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDQ3LDAuNTgNCjQ3LjI0Mi4yMDIuMjMwLDIwNTIsMjA1MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywyOCwwLjU4DQo0Ny43Ni4xNDYuMSwyMDUzLDIwNTMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw0MiwwLjU4DQo0Ny4yNDMuNS4xNTQsODQ0Myw4NDQzLHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjYsMC41OA0KNDcuNzYuOTQuMTUsODAsMCxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywxMDgwLDAuNTYNCjQ3LjIzOC42LjEwMiwyMDk1LDIwOTUsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMzUsMC41Ng0KOC4yMTcuMTU5LjIxMCw4ODgwLDg4ODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMzcsMC41Ng0KMjAyLjgxLjIzMS4xNTAsODAsODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjExLDAuNTYNCjQ3Ljc2Ljc3LjEwMyw4ODgwLDg4ODAsZmFsc2UsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMjYsMC41NQ0KNDcuMjQzLjY3LjI4LDIwOTYsMjA5Nix0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDQ2LDAuNTQNCjguMjE4LjE0Mi4yNTMsMjA4MiwyMDgyLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDY5LDAuNTQNCjQ3LjI0Mi4xNzYuMjM3LDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywyOCwwLjU0DQo4LjIxMC4xMDcuMjQ2LDgwLDgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDMxLDAuNTQNCjQ3LjI0My4xMzkuODUsODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDQ0LDAuNTMNCjguMjE3LjIzMi4yNDYsMjA4MywyMDgzLHRydWUsSEtHLEFzaWEgUGFjaWZpYyxIb25nIEtvbmcsMzEsMC41Mw0KNDcuMjQzLjIzNC45LDIwNTMsMjA1Myx0cnVlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDMxLDAuNTANCjguMjE4LjE4MS4xODksMjA5NSwyMDk1LGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDI1LDAuNTANCjQ3LjI0My4yMzQuOSw4NDQzLDg0NDMsdHJ1ZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzMCwwLjQ5DQo4LjIxNy4yMjEuMTY1LDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1NSwwLjQ5DQo4LjIxNy4yNTEuNjIsODg4MCw4ODgwLGZhbHNlLEhLRyxBc2lhIFBhY2lmaWMsSG9uZyBLb25nLDY1LDAuNDkNCjQ3Ljc2Ljk0LjE1LDIwODIsMjA4MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzNSwwLjQ5DQo0Ny4yNDIuMTcxLjk0LDIwOTUsMjA5NSxmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZyw1OCwwLjQ2DQo4LjIxOC4yMDcuMTY5LDIwNTIsMjA1MixmYWxzZSxIS0csQXNpYSBQYWNpZmljLEhvbmcgS29uZywzNCwwLjQ2', 
];

let subconverter = "url.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cutethotw/ClashRule/main/GeneralClashRule.ini"; //订阅转换配置文件
let noTLS = 'false'; //改为 true , 将不做域名判断 始终返回noTLS节点
let link = '';
let edgetunnel = 'ed';
let RproxyIP = 'false';
let proxyIPs = [//无法匹配到节点名就随机分配以下ProxyIP域名
	'proxyip.multacom.fxxk.dedyn.io',
	'proxyip.vultr.fxxk.dedyn.io',
];
let CMproxyIPs = [
	//'proxyip.aliyun.fxxk.dedyn.io:HK',//匹配节点名, 有HK就分配该ProxyIP域名
]
let socks5DataURL = '';//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/socks5Data'
let BotToken ='';
let ChatID =''; 
let proxyhosts = [//本地代理域名池
	//'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let EndPS = '';//节点名备注内容
let 协议类型 = 'VLESS';
let FileName = 'WorkerVless2sub';
let SUBUpdateTime = 6; 
let total = 99;//PB
//let timestamp = now;
let timestamp = 4102329600000;//2099-12-31
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

let MamaJustKilledAMan = ['telegram','twitter','miaoko'];
async function getAddressesapi(api) {
	if (!api || api.length === 0) {
		return [];
	}

	let newapi = "";

	// 创建一个AbortController对象，用于控制fetch请求的取消
	const controller = new AbortController();

	const timeout = setTimeout(() => {
		controller.abort(); // 取消所有请求
	}, 2000); // 2秒后触发

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		// 对api数组进行遍历，对每个API地址发起fetch请求
		const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
			method: 'get', 
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': 'cmliu/WorkerVless2sub'
			},
			signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
		}).then(response => response.ok ? response.text() : Promise.reject())));

		// 遍历所有响应
		for (const response of responses) {
			// 检查响应状态是否为'fulfilled'，即请求成功完成
			if (response.status === 'fulfilled') {
				// 获取响应的内容
				const content = await response.value;
				newapi += content + '\n';
			}
		}
	} catch (error) {
		console.error(error);
	} finally {
		// 无论成功或失败，最后都清除设置的超时定时器
		clearTimeout(timeout);
	}

	const newAddressesapi = await ADD(newapi);

	// 返回处理后的结果
	return newAddressesapi;
}

async function getAddressescsv(tls) {
	if (!addressescsv || addressescsv.length === 0) {
		return [];
	}
	
	let newAddressescsv = [];
	
	for (const csvUrl of addressescsv) {
		try {
			const response = await fetch(csvUrl);
		
			if (!response.ok) {
				console.error('获取CSV地址时出错:', response.status, response.statusText);
				continue;
			}
		
			const text = await response.text();// 使用正确的字符编码解析文本内容
			let lines;
			if (text.includes('\r\n')){
				lines = text.split('\r\n');
			} else {
				lines = text.split('\n');
			}
		
			// 检查CSV头部是否包含必需字段
			const header = lines[0].split(',');
			const tlsIndex = header.indexOf('TLS');
			const speedIndex = header.length - 1; // 最后一个字段
		
			const ipAddressIndex = 0;// IP地址在 CSV 头部的位置
			const portIndex = 1;// 端口在 CSV 头部的位置
			const dataCenterIndex = tlsIndex + 1; // 数据中心是 TLS 的后一个字段
		
			if (tlsIndex === -1) {
				console.error('CSV文件缺少必需的字段');
				continue;
			}
		
			// 从第二行开始遍历CSV行
			for (let i = 1; i < lines.length; i++) {
				const columns = lines[i].split(',');
		
				// 检查TLS是否为"TRUE"且速度大于DLS
				if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
					const ipAddress = columns[ipAddressIndex];
					const port = columns[portIndex];
					const dataCenter = columns[dataCenterIndex];
			
					const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
					newAddressescsv.push(formattedAddress);
				}
			}
		} catch (error) {
			console.error('获取CSV地址时出错:', error);
			continue;
		}
	}
	
	return newAddressescsv;
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

let protocol;
let socks5Data;
export default {
	async fetch (request, env) {
		if (env.TOKEN) mytoken = await ADD(env.TOKEN);
		//mytoken = env.TOKEN.split(',') || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		socks5DataURL = env.SOCKS5DATA || socks5DataURL;
		if (env.CMPROXYIPS) CMproxyIPs = await ADD(env.CMPROXYIPS);;
		//console.log(CMproxyIPs);
		EndPS = env.PS || EndPS;
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const format = url.searchParams.get('format') ? url.searchParams.get('format').toLowerCase() : "null";
		let host = "";
		let uuid = "";
		let path = "";
		let sni = "";
		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		if (env.UA) MamaJustKilledAMan = MamaJustKilledAMan.concat(await ADD(env.UA));
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;

		link = env.LINK || link;
		const links = await ADD(link);
		link = links.join('\n');
		
		if (env.ADD) addresses = await ADD(env.ADD);
		if (env.ADDAPI) addressesapi = await ADD(env.ADDAPI);
		if (env.ADDNOTLS) addressesnotls = await ADD(env.ADDNOTLS);
		if (env.ADDNOTLSAPI) addressesnotlsapi = await ADD(env.ADDNOTLSAPI);
		if (env.ADDCSV) addressescsv = await ADD(env.ADDCSV);
		DLS = env.DLS || DLS;

		/*
		console.log(`
			addresses: ${addresses}
			addressesapi: ${addressesapi}
			addressesnotls: ${addressesnotls}
			addressesnotlsapi: ${addressesnotlsapi}
			addressescsv: ${addressescsv}
			DLS: ${DLS}
		`);
		*/
		
		if (socks5DataURL) {
			try {
				const response = await fetch(socks5DataURL);
				const socks5DataText = await response.text();
				if (socks5DataText.includes('\r\n')){
					socks5Data = socks5DataText.split('\r\n').filter(line => line.trim() !== '');
				} else {
					socks5Data = socks5DataText.split('\n').filter(line => line.trim() !== '');
				}
			} catch {
				socks5Data = null ;
			}
		}
		
		if (env.PROXYIP) proxyIPs = await ADD(env.PROXYIP);
		//console.log(proxyIPs);

		if (mytoken.length > 0 && mytoken.some(token => url.pathname.includes(token))) {
			host = "null";
			if (env.HOST) {
				const hosts = await ADD(env.HOST);
				host = hosts[Math.floor(Math.random() * hosts.length)];
			}
			
			if (env.PASSWORD){
				协议类型 = 'Trojan';
				uuid = env.PASSWORD
			} else {
				协议类型 = 'VLESS';
				uuid = env.UUID || "null";
			}
			
			path = env.PATH || "/?ed=2560";
			sni = env.SNI || host;
			edgetunnel = env.ED || edgetunnel;
			RproxyIP = env.RPROXYIP || RproxyIP;

			if (host == "null" || uuid == "null" ){
				let 空字段;
				if (host == "null" && uuid == "null") 空字段 = "HOST/UUID";
				else if (host == "null") 空字段 = "HOST";
				else if (uuid == "null") 空字段 = "UUID";
				EndPS += ` 订阅器内置节点 ${空字段} 未设置！！！`;
			}

			const hasSos = url.searchParams.has('sos');
			if (hasSos) {
				const hy2Url = "https://hy2sub.pages.dev/auto";
				try {
					const subconverterResponse = await fetch(hy2Url);
	
					if (!subconverterResponse.ok) {
						throw new Error(`Error fetching lzUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
					}
	
					const base64Text = await subconverterResponse.text();
					link += '\n' + atob(base64Text); // 进行 Base64 解码
	
				} catch (error) {
					// 错误处理
				}	
			}
		await sendMessage("#VLESS订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		} else {
			host = url.searchParams.get('host');
			uuid = url.searchParams.get('uuid') || url.searchParams.get('password') || url.searchParams.get('pw');
			path = url.searchParams.get('path');
			sni = url.searchParams.get('sni') || host;
			edgetunnel = url.searchParams.get('edgetunnel') || url.searchParams.get('epeius') || edgetunnel;
			RproxyIP = url.searchParams.get('proxyip') || RproxyIP;

			if (url.searchParams.has('edgetunnel') || url.searchParams.has('uuid')){
				协议类型 = 'VLESS';
			} else if (url.searchParams.has('epeius') || url.searchParams.has('password') || url.searchParams.has('pw')){
				协议类型 = 'Trojan';
			}

			if (!url.pathname.includes("/sub")) {
				const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
				if (envKey) {
					const URLs = await ADD(env[envKey]);
					const URL = URLs[Math.floor(Math.random() * URLs.length)];
					return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
				}
				//首页改成一个nginx伪装页
				return new Response(await nginx(), {
					headers: {
						'Content-Type': 'text/html; charset=UTF-8',
					},
				});
			}
			
			if (!host || !uuid) {
				const responseText = `
			缺少必填参数：host 和 uuid
			Missing required parameters: host and uuid
			پارامترهای ضروری وارد نشده: هاست و یوآی‌دی
			
			${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
			
			
			
			
			
			
				
				https://github.com/cmliu/WorkerVless2sub
				`;
			
				return new Response(responseText, {
				status: 400,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
			
			if (!path || path.trim() === '') {
				path = '/?ed=2560';
			} else {
				// 如果第一个字符不是斜杠，则在前面添加一个斜杠
				path = (path[0] === '/') ? path : '/' + path;
			}
		}
		
		if (host.toLowerCase().includes('notls') || host.toLowerCase().includes('worker') || host.toLowerCase().includes('trycloudflare')) noTLS = 'true';
		noTLS = env.NOTLS || noTLS;
		let subconverterUrl = '';

		if (!userAgent.includes('subconverter') && MamaJustKilledAMan.some(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead => userAgent.includes(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead)) && MamaJustKilledAMan.length > 0) {
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			//首页改成一个nginx伪装页
			return new Response(await nginx(), {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( (userAgent.includes('clash') || (format === 'clash' && !userAgent.includes('subconverter')) ) && !userAgent.includes('nekobox') && !userAgent.includes('cf-workers-sub')) {
			subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
		} else if ( (userAgent.includes('sing-box') || userAgent.includes('singbox') || (format === 'singbox' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')){
			subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
		} else {
			if(host.includes('workers.dev') || host.includes('pages.dev')) {
				if (proxyhostsURL) {
					try {
						const response = await fetch(proxyhostsURL); 
					
						if (!response.ok) {
							console.error('获取地址时出错:', response.status, response.statusText);
							return; // 如果有错误，直接返回
						}
					
						const text = await response.text();
						const lines = text.split('\n');
						// 过滤掉空行或只包含空白字符的行
						const nonEmptyLines = lines.filter(line => line.trim() !== '');
					
						proxyhosts = proxyhosts.concat(nonEmptyLines);
					} catch (error) {
						console.error('获取地址时出错:', error);
					}
				}
				// 使用Set对象去重
				proxyhosts = [...new Set(proxyhosts)];
			}
			
			const newAddressesapi = await getAddressesapi(addressesapi);
			const newAddressescsv = await getAddressescsv('TRUE');
			addresses = addresses.concat(newAddressesapi);
			addresses = addresses.concat(newAddressescsv);
			
			// 使用Set对象去重
			const uniqueAddresses = [...new Set(addresses)];
			
			let notlsresponseBody;
			if(noTLS == 'true' && 协议类型 == 'VLESS'){
				const newAddressesnotlsapi = await getAddressesapi(addressesnotlsapi);
				const newAddressesnotlscsv = await getAddressescsv('FALSE');
				addressesnotls = addressesnotls.concat(newAddressesnotlsapi);
				addressesnotls = addressesnotls.concat(newAddressesnotlscsv);
				const uniqueAddressesnotls = [...new Set(addressesnotls)];

				notlsresponseBody = uniqueAddressesnotls.map(address => {
					let port = "80";
					let addressid = address;
				
					const match = addressid.match(regex);
					if (!match) {
						if (address.includes(':') && address.includes('#')) {
							const parts = address.split(':');
							address = parts[0];
							const subParts = parts[1].split('#');
							port = subParts[0];
							addressid = subParts[1];
						} else if (address.includes(':')) {
							const parts = address.split(':');
							address = parts[0];
							port = parts[1];
						} else if (address.includes('#')) {
							const parts = address.split('#');
							address = parts[0];
							addressid = parts[1];
						}
					
						if (addressid.includes(':')) {
							addressid = addressid.split(':')[0];
						}
					} else {
						address = match[1];
						port = match[2] || port;
						addressid = match[3] || address;
					}
	
					//console.log(address, port, addressid);

					if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
						// 将addressid转换为小写
						let lowerAddressid = addressid.toLowerCase();
						// 初始化找到的proxyIP为null
						let foundProxyIP = null;
					
						if (socks5Data) {
							const socks5 = getRandomProxyByMatch(lowerAddressid, socks5Data);
							path = `/?${socks5}`;
						} else {
							// 遍历CMproxyIPs数组查找匹配项
							for (let item of CMproxyIPs) {
								if (lowerAddressid.includes(item.split(':')[1].toLowerCase())) {
									foundProxyIP = item.split(':')[0];
									break; // 找到匹配项，跳出循环
								}
							}
						
							if (foundProxyIP) {
								// 如果找到匹配的proxyIP，赋值给path
								path = `/?proxyip=${foundProxyIP}`;
							} else {
								// 如果没有找到匹配项，随机选择一个proxyIP
								const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
								path = `/?proxyip=${randomProxyIP}`;
							}
						}
					}

					const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=&type=ws&host=${host}&path=${encodeURIComponent(path)}#${encodeURIComponent(addressid + EndPS)}`;
			
					return vlessLink;

				}).join('\n');
			}

			const responseBody = uniqueAddresses.map(address => {
				let port = "443";
				let addressid = address;
			
				const match = addressid.match(regex);
				if (!match) {
					if (address.includes(':') && address.includes('#')) {
						const parts = address.split(':');
						address = parts[0];
						const subParts = parts[1].split('#');
						port = subParts[0];
						addressid = subParts[1];
					} else if (address.includes(':')) {
						const parts = address.split(':');
						address = parts[0];
						port = parts[1];
					} else if (address.includes('#')) {
						const parts = address.split('#');
						address = parts[0];
						addressid = parts[1];
					}
				
					if (addressid.includes(':')) {
						addressid = addressid.split(':')[0];
					}
				} else {
					address = match[1];
					port = match[2] || port;
					addressid = match[3] || address;
				}

				//console.log(address, port, addressid);
		
				if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
					// 将addressid转换为小写
					let lowerAddressid = addressid.toLowerCase();
					// 初始化找到的proxyIP为null
					let foundProxyIP = null;
				
					if (socks5Data) {
						const socks5 = getRandomProxyByMatch(lowerAddressid, socks5Data);
						path = `/?${socks5}`;
					} else {
						// 遍历CMproxyIPs数组查找匹配项
						for (let item of CMproxyIPs) {
							if (lowerAddressid.includes(item.split(':')[1].toLowerCase())) {
								foundProxyIP = item.split(':')[0];
								break; // 找到匹配项，跳出循环
							}
						}
					
						if (foundProxyIP) {
							// 如果找到匹配的proxyIP，赋值给path
							path = `/?proxyip=${foundProxyIP}`;
						} else {
							// 如果没有找到匹配项，随机选择一个proxyIP
							const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
							path = `/?proxyip=${randomProxyIP}`;
						}
					}
				}
				
				let 伪装域名 = host ;
				let 最终路径 = path ;
				let 节点备注 = EndPS ;
				if(proxyhosts && (host.includes('.workers.dev') || host.includes('pages.dev'))) {
					最终路径 = `/${host}${path}`;
					伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
					节点备注 = `${EndPS} 已启用临时域名中转服务，请尽快绑定自定义域！`;
					sni = 伪装域名;
				}

				if (协议类型 == 'Trojan'){
					const trojanLink = `trojan://${uuid}@${address}:${port}?security=tls&sni=${sni}&alpn=http%2F1.1&fp=randomized&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;

					return trojanLink;
				} else {
					const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=tls&sni=${sni}&alpn=http%2F1.1&fp=random&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;
			
					return vlessLink;
				}

			}).join('\n');
			
			let combinedContent = responseBody; // 合并内容
			
			if (link) {
				combinedContent += '\n' + link;
				console.log("link: " + link)
			}
			
			if (notlsresponseBody && noTLS == 'true') {
				combinedContent += '\n' + notlsresponseBody;
				console.log("notlsresponseBody: " + notlsresponseBody);
			}
			
			if (协议类型 == 'Trojan' && (userAgent.includes('surge') || (format === 'surge' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')) {
				const TrojanLinks = combinedContent.split('\n');
				subconverterUrl =  `https://${subconverter}/sub?target=surge&ver=4&url=${encodeURIComponent(TrojanLinks.join('|'))}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=true&fdn=false`;
			} else {
				const base64Response = btoa(combinedContent); // 重新进行 Base64 编码

				const response = new Response(base64Response, {
					headers: { 
						//"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
	
				return response;
			}

		}

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
				
			let subconverterContent = await subconverterResponse.text();

			if (协议类型 == 'Trojan' && (userAgent.includes('surge') || (format === 'surge' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')){
				subconverterContent = surge(subconverterContent, host);
			}

			return new Response(subconverterContent, {
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
					"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
				},
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}
	}
};

function surge(content, url) {
	let 每行内容;
	if (content.includes('\r\n')){
		每行内容 = content.split('\r\n');
	} else {
		每行内容 = content.split('\n');
	}

	let 输出内容 = "";
	for (let x of 每行内容) {
		if (x.includes('= trojan,')) {
			const host = x.split("sni=")[1].split(",")[0];
			const 备改内容 = `skip-cert-verify=true, tfo=false, udp-relay=false`;
			const 正确内容 = `skip-cert-verify=true, ws=true, ws-path=/?ed=2560, ws-headers=Host:"${host}", tfo=false, udp-relay=false`;
			输出内容 += x.replace(new RegExp(备改内容, 'g'), 正确内容).replace("[", "").replace("]", "") + '\n';
		} else {
			输出内容 += x + '\n';
		}
	}

	输出内容 = `#!MANAGED-CONFIG ${url.href} interval=86400 strict=false` + 输出内容.substring(输出内容.indexOf('\n'));
	return 输出内容;
}

function getRandomProxyByMatch(CC, socks5Data) {
	// 将匹配字符串转换为小写
	const lowerCaseMatch = CC.toLowerCase();
	
	// 过滤出所有以指定匹配字符串结尾的代理字符串
	let filteredProxies = socks5Data.filter(proxy => proxy.toLowerCase().endsWith(`#${lowerCaseMatch}`));
	
	// 如果没有匹配的代理，尝试匹配 "US"
	if (filteredProxies.length === 0) {
		filteredProxies = socks5Data.filter(proxy => proxy.toLowerCase().endsWith(`#us`));
	}
	
	// 如果还是没有匹配的代理，从整个代理列表中随机选择一个
	if (filteredProxies.length === 0) {
		return socks5Data[Math.floor(Math.random() * socks5Data.length)];
	}
	
	// 从匹配的代理中随机选择一个并返回
	const randomProxy = filteredProxies[Math.floor(Math.random() * filteredProxies.length)];
	return randomProxy;
}
