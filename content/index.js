module.exports = {
	
	"languages": {
		"en": {
			"content": {
				"toggle_navigation": "Toggle navigation"
			},
			"links": {
				"home": "/",
				"starting": "/getting-started",
				"docs": "/docs",
				"examples": "/examples"
			},
			"primarynav": [
				{ "section": "home",                "path": "/",                      "label": "Home" },
				{ "section": "starting",            "path": "/getting-started",       "label": "Getting Started" },
				{ "section": "docs",                "path": "/docs",                  "label": "Documentation" },
				{ "section": "examples",            "path": "/examples",              "label": "Examples" }
			],
			"docsnav": [
				{ "value": "getting-started", "path": "/docs/getting-started", "label": "Getting Started", "labelsm": "Starting" },
				{ "value": "configuration", "path": "/docs/configuration", "label": "Configuration", "labelsm": "Config" },
				{ "value": "database", "path": "/docs/database", "label": "Database", "labelsm": "Data" },
				{ "value": "classapi", "path": "/docs/api/current/class", "label": "Class Reference", "labelsm": "Ref" },
				{ "value": "faqs",              	"path": "/docs/faqs",        	  "label": "FAQ's",            "labelsm": "FAQs" }
				/*{ "value": "views",                 "path": "/docs/views",            "label": "Views",            "labelsm": "Views" }*/
			],
		},
		"zh": {
			"content": {
				"toggle_navigation": "锁定导航栏"
			},
			"links": {
				"home": "/zh",
				"starting": "/zh/getting-started",
				"docs": "/zh/docs",
				"examples": "/zh/examples"
			},
			"primarynav": [
				{ "section": "home",                "path": "/zh",                       "label": "首页" },
				{ "section": "starting",            "path": "/zh/getting-started",       "label": "入门指南" },
				{ "section": "docs",                "path": "/zh/docs",                  "label": "文档" },
				{ "section": "examples",            "path": "/zh/examples",              "label": "范例" }
			],
			"docsnav": [
				{ "value": "getting-started",       "path": "/zh/docs/getting-started",  "label": "入门指南",         "labelsm": "入门" },
				{ "value": "configuration",         "path": "/zh/docs/configuration",    "label": "配置",             "labelsm": "配置" },
				{ "value": "database",              "path": "/zh/docs/database",         "label": "数据库",           "labelsm": "数据库" },
				/*{ "value": "views",                 "path": "/zh/docs/views",            "label": "视图",             "labelsm": "视图" }*/
			]
		}
	},
	
	"routes": {
		
		// Language: en
		'/': {
			"path": "/",
			"language": "en",
			"template": "home",
			"section": "home",
			"title": "Node.js cms and web application platform built on Express and MongoDB"
		},
		"/getting-started": {
			"path": "/getting-started",
			"language": "en",
			"template": "starting",
			"section": "starting",
			"title": "Getting started"
		},
		"/examples": {
			"path": "/examples",
			"language": "en",
			"template": "examples",
			"section": "examples",
			"title": "Sample applications"
		},
		"/docs": {
			"path": "/docs",
			"language": "en",
			"template": "docs/index",
			"section": "docs",
			"docssection": { "value": "introduction", "path": "/docs", "label": "Introduction" },
			"title": "KeystoneJS Documentation"
		},
		"/docs/getting-started": {
			"path": "/docs/getting-started",
			"language": "en",
			"template": "docs/getting-started",
			"section": "docs",
			"docssection": { "value": "getting-started", "path": "/docs/guides", "label": "Guides" },
			"title": "Getting Started"
		},
		"/docs/configuration": {
			"path": "/docs/configuration",
			"language": "en",
			"template": "docs/configuration",
			"section": "docs",
			"docssection": { "value": "configuration", "path": "/docs/configuration", "label": "Configuration" },
			"title": "Configuration"
		},
		"/docs/database": {
			"path": "/docs/database",
			"language": "en",
			"template": "docs/database",
			"section": "docs",
			"docssection": { "value": "database", "path": "/docs/database", "label": "Database" },
			"title": "Setting up and using Data Models"
		},
		"/docs/faqs": {
			"path": "/docs/faqs",
			"language": "en",
			"template": "docs/faqs",
			"section": "docs",
			"docssection": { "value": "faqs", "path": "/docs/faqs", "label": "FAQs" },
			"title": "Frequently Asked Questions"
		},
		//
		// DEVELOPMENT SERVER ONLY
		"/docs/api": {
			"path": "/docs/api",
			"language": "en",
			"template": "docs/api",
			"section": "docs",
			"docssection": { "value": "api", "path": "/docs/api", "label": "Keystone Api" },
			"title": "Keystone Api",
			"development": "true",
			"versions": ['0.2.x','0.3.x','0.4.x'],
			"current": '0.3.x'
		},
		
	}
}
