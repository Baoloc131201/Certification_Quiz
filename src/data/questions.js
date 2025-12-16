export const questions = [
  {
  category: "Order Fulfillment",
  question:
    "Which of the following activities does the standard order fulfillment process support in SAP Commerce Cloud?",
  options: [
    "Managing and controlling an order through all stages in the system once it has been placed",
    "Managing cancellations and returns",
    "Preprocessing orders and splitting them into consignments if necessary",
    "Creating a support ticket on behalf of a customer"
  ],
  correctAnswers: [0, 2]
  },

  {
  category: "C_C4H32_2411 – Commerce",
  question:
    "Multi-Code coupons are generated based on a coupon code generation configuration. What does a coupon code generation configuration contain?",
  options: [
    "Coupon code prefix",
    "Number of coupon codes",
    "Code separator",
    "Coupon part count",
    "Coupon part length"
  ],
  correctAnswers: [2, 3, 4]
  },

  {
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "What actions can you perform using the Advanced Edit mode of SmartEdit?",
  options: [
    "Personalize page content with customization segments",
    "Roll back to a previous version of the page",
    "Convert shared content slots to non-shared content slots",
    "Edit the content of shared content slots"
  ],
  correctAnswers: [2, 3]
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "You want to ensure that only authorized back-end users can modify workflow templates in the Backoffice Administration Cockpit. What can you use to achieve this?",
  options: [
    "Apply restrictions or personalization rules",
    "Use type-based access rights",
    "Assign each user as an “owner” of the workflow templates",
    "Assign the users to the “visible for principals” list of the workflow templates"
  ],
  correctAnswers: [1]
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "How does SAP Commerce Cloud handle shopping carts?",
  options: [
    "Carts can be saved directly as saved carts on the storefront.",
    "Carts are persisted automatically only for customers who are logged into the storefront.",
    "Carts can be exported and imported using the Comma-Separated Values (CSV) format.",
    "Saved carts can be merged by restoring them one-by-one."
  ],
  correctAnswers: [0, 3]
},
{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "What can a customer support agent use the Assisted Service Module (ASM) to do?",
  options: [
    "Create a new customer account on the customer’s behalf",
    "Approve an order flagged as possible fraud",
    "Search for a customer’s account or session",
    "Create and assign a coupon valid for the duration of the ASM session"
  ],
  correctAnswers: [0, 2]
},
{
  category: "C_C4H32_2411 – Commerce",
  question:
    "What are the key tasks of a Business-to-Business (B2B) administrator?",
  options: [
    "Approve orders that exceed cost center limit",
    "Define structure of the customer organization",
    "Manage cost centers and budgets",
    "Manage shipping addresses",
    "Approve negotiated prices of commerce quotes"
  ],
  correctAnswers: [1, 2, 3]
},
{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "You want to create a new web page. What are page templates used for?",
  options: [
    "To create page components",
    "To add restrictions to a page",
    "To specify the layout of a page",
    "To specify the shared slots"
  ],
  // Page template dùng để định nghĩa layout và shared slots
  correctAnswers: [2, 3]
},
{
  category: "C_C4H32_2411 – Commerce",
  question:
    "You are creating a new promotion for an SAP Commerce storefront based on the promotion engine. What aspects of the promotion rule will the promotion engine evaluate when validating the promotion?",
  options: [
    "Exclusivity",
    "Actions",
    "Conditions",
    "Rule group",
    "Displayed Message"
  ],
  correctAnswers: [1, 2, 3]
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question: "What can end-users do when working with workflows?",
  options: [
    "Mark a task as being in error to abort the step",
    "Comment on a task",
    "See the decisions made by previous steps",
    "Check their “to-do” tasks in the Collaboration Center",
    "Confirm a task is completed by making a decision"
  ],
  correctAnswers: [1, 3, 4]
},
{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question: "What does SAP Commerce Cloud provide for developing payment functionality?",
  options: [
    "Support for Silent Order Post (SOP) where the payment form is generated and hosted by the payment provider",
    "Support for Hosted Order Page (HOP) where the payment form is generated and hosted by the payment provider",
    "An out-of-the-box payment adapter gateway with PayPal",
    "Integration with external Payment Service Providers (PSP)"
  ],
  correctAnswers: [1, 3]
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question: "What are the advantages of using SAP Commerce Cloud in the Public Cloud?",
  options: [
    "Compatibility with older versions of SAP Commerce, such as 6.x",
    "Flexibility of installing any third-party software application",
    "Security and compliance for example disaster recovery and backups and more",
    "Regular upgrades of the underlying SAP Commerce Cloud core",
    "Support services from 24/7 support teams"
  ],
  correctAnswers: [2, 3, 4]
},
{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "Which of the following considerations apply to the concept of categorization work in SAP Commerce?",
  options: [
    "A category can contain a set of product attributes.",
    "A category is a logical group of products with the same attributes.",
    "A category can have multiple parent categories.",
    "A product can belong to multiple categories."
  ],
  correctAnswers: [2, 3]
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "Which of the following are out-of-the-box features of the standard Business-to-Consumer (B2C) functionality in SAP Commerce Cloud?",
  options: [
    "Pre-paid system",
    "Quick Orders",
    "Quote Negotiation",
    "Buy online and pick up in store"
  ],
  correctAnswers: [0, 3]
},

{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question: "What does the Fraud Detection Module provide out of the box?",
  options: [
    "A sample implementation based on fraud symptom detection",
    "A storefront interface for customers to see the reason that their order is judged as fraudulent",
    "Essential fraud checks conducted by the internal fraud service",
    "If an order is identified as fraud with the first threshold, it is rejected automatically and marked as canceled"
  ],
  correctAnswers: [0, 2]
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "Why might you create multiple search profiles?",
  options: [
    "To personalize facets for different categories",
    "To personalize search box configurations",
    "To personalize search results for different target groups",
    "To personalize Search Engine Optimization (SEO) settings for different parts of a website"
  ],

  correctAnswers: [0, 2]
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "SAP Commerce Cloud includes the Integration API module as one of the most important interfaces for data integration. What should you consider when planning to use the Integration API module?",
  options: [
    "You can configure the integration objects and they will become effective after a simplified redeployment of the server.",
    "You can configure the integration objects at runtime without restarting or recompiling the server.",
    "You can define the integration objects and their payloads for easy mapping in a SOAP application.",
    "You can define the integration objects and their payloads for easy mapping in an OData application."
  ],

  correctAnswers: [1, 3]
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "Which of the following might be involved in using multi-dimensional product variants to model an affiliation to five sports teams for a line of men’s jerseys?",
  options: [
    "Define a Team Affiliation variant classification attribute in the Backoffice",
    "Create a Team Affiliation instance of VariantCategory in the Backoffice",
    "Create a Team Affiliation bundle of product variants in the Product Cockpit",
    "Define a Team Affiliation variant product attribute in your custom extensions (items.xml)"
  ],
  correctAnswers: [0]
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "In SAP Commerce Cloud, the following 4 price rows are defined:\n" +
    "1. priceRowA: userA - 5 dollars\n" +
    "2. priceRowB: userPriceListB - 10 dollars\n" +
    "3. priceRowC: productPriceGroupC - 8 dollars\n" +
    "4. priceRowD: * - 20 dollars default (anything is 20 dollars)\n\n" +
    "Which price row will apply if userA (assigned to userPriceListB) is buying a product assigned to productPriceGroupC?",
  options: [
    "priceRowB",
    "priceRowC",
    "priceRowA",
    "priceRowD"
  ],
  correctAnswers: [2]
},
{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "Which actions can be exclusively handled in the Customer Support Cockpit in Backoffice, rather than the Assisted Service mode on the storefront?",
  options: [
    "Cancel orders",
    "Resolve a customer complaint ticket",
    "Approve product reviews",
    "Check the order history of customers",
    "Access personal data reports"
  ],
  correctAnswers: [1, 2, 4] 
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "Which out-of-the-box features do Commerce Customizations provide?",
  options: [
    "Personalized prices",
    "Personalized promotions",
    "Personalized search results",
    "Personalized product bundles"
  ],
  // OOTB Commerce Customizations: personalized promotions + search results
  correctAnswers: [1, 2]
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "When dealing with CronJobs, which considerations do you need to keep in mind?",
  options: [
    "CronJobs always run with admin privileges",
    "A CronJob delegates the work to be done to a Job item",
    "It’s possible to run CronJobs from Backoffice, using ImpEx, and using Web Services",
    "CronJobs can be both defined and executed using ImpEx",
    "When defining a CronJob, you must specify whether it runs once or on a recurring schedule"
  ],
  correctAnswers: [1, 2, 4] 
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "You have been asked to import a large amount of data using ImpEx scripts. What would you do to improve performance when executing ImpEx?",
  options: [
    "Enable code execution to dynamically speed up the import",
    "Manually divide the import into small batches",
    "Enable distributed ImpEx",
    "Consider data import sequence regarding dependency"
  ],
  correctAnswers: [2, 3] 
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "Which of the following can be created out of the box in Omni Commerce Connect (also known as OCC)?",
  options: [
    "Promotions",
    "Products",
    "Tickets",
    "Product interests"
  ],
  // OCC OOTB cho phép tạo ticket (hỗ trợ) và product interest (stock notification)
  correctAnswers: [2, 3]
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "What are key features of the SAP Commerce Cloud Rule Engine?",
  options: [
    "A backoffice interface for creating new condition types",
    "A centralized repository of rules",
    "Separation of data and logic",
    "A backoffice interface for triggering the rule execution"
  ],
  correctAnswers: [1, 2]
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question: "Why would you use a classification category?",
  options: [
    "To group products that belong to a catalog version",
    "To create products with different variants",
    "To link custom properties to products or catalog categories",
    "To hold custom properties"
  ],
  // Classification category dùng để gắn & chứa thuộc tính (custom properties)
  correctAnswers: [2, 3] 
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "What checkout features does SAP Commerce Cloud support out of the box?",
  options: [
    "Additional validation options in the Backoffice Administration Cockpit",
    "A temporary user account is created and mapped to the session cart during Guest Checkout",
    "Customizable checkout steps configurable in Assisted Services Mode (ASM)",
    "Regular step-by-step checkout, used by either customers or ASM agents",
    "Express checkout with previously saved values from the customer account"
  ],
  // Guest checkout gắn cart với user tạm, có checkout từng bước, và express checkout dùng dữ liệu đã lưu
  correctAnswers: [1, 3, 4] 
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "You want to add changeable product attributes that are NOT used in the business logic. How would you do this?",
  options: [
    "By creating classifying categories and feature lists",
    "By defining dynamic attributes in the type system",
    "By creating new variants based on changeable attributes like color or size",
    "By defining persistent attributes in the type system"
  ],
  // Changeable, không dùng trong business logic → dùng classification/feature
  correctAnswers: [0] // A
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "Which SAP solutions can be integrated with SAP Commerce Cloud, Integration Extension Pack?",
  options: [
    "SAP Emarsys",
    "SAP Materials Management",
    "SAP Customer Data Cloud",
    "SAP Qualtrics"
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "If a customer triggers target groups A and B, which of the following personalization module behaviors can we expect out of the box?",
  options: [
    "If the target groups belong to different customizations, their actions are first merged, then triggered.",
    "If both target groups belong to the same customization, their actions are merged and triggered.",
    "If both target groups belong to the same customization, only the actions of the target group with higher priority are triggered.",
    "If the target groups belong to different customizations, only the actions of the target group with higher priority are triggered."
  ],
  correctAnswers: [1, 3] 
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question: "What is a variant product?",
  options: [
    "A product containing properties whose values can be set by the customer.",
    "A product representing multiple purchasable versions of a base product.",
    "A product whose properties and price differ depending on which country-specific catalog it is in.",
    "A product representing one purchasable version of a base product."
  ],
  correctAnswers: [3] // D
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question: "What are CMS navigation nodes used for?",
  options: [
    "To provide a hierarchical structure linking B2B business units and cost centers",
    "To provide links used in the checkout navigation page flow",
    "To configure links used in the navigation bar",
    "To configure links used in the My Account menu"
  ],
  correctAnswers: [2, 3]
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "How does Personalization mode in SmartEdit visualize multiple customizations simultaneously?",
  options: [
    "SmartEdit draws color-coded boxes around the customizations for each variation/target group",
    "SmartEdit deemphasizes components other than the customized ones",
    "SmartEdit labels the customized components as A, B, and so on, referring to different variations/target groups",
    "SmartEdit shows only those components that are different as a result of customization"
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question: "Why might you use an ImpEx script?",
  options: [
    "To modify configuration properties",
    "To create new types in the type system",
    "To set up type-based access rights",
    "To create restrictions/personalization rules",
    "To create classification categories and features in the classification system"
  ],
  // C, D, E
  correctAnswers: [2, 3, 4]
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "What is a media format typically used for in media management in SAP Commerce Cloud?",
  options: [
    "To refer to the type of the assigned media, such as image, video, or text",
    "To indicate the operation of converting a base media to another media",
    "To describe the format of the assigned media, such as .jpeg or .png",
    "To enable the assigned media to be selected when dealing with responsive banner components"
  ],
  // Đúng: dùng trong chuyển đổi media + chọn media theo format (responsive, banner...)
  correctAnswers: [1, 3] 
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "Which of the following promotions are supported out of the box by the promotion engine without technical customization?",
  options: [
    "When a user buys 100 dollars worth of category X products and 100 dollars worth of category Y products, then they get 50% off category Z products.",
    "Redeem coupon A, get product B for free.",
    "If a user belongs to group A, then they can buy one product in any category at 50% off.",
    "If a user buys 100 dollars worth of category A products, then they get a coupon for the next purchase.",
    "Buy over 500 dollars, get any product in category A at 20% off."
  ],
  // A, B, E
  correctAnswers: [0, 1, 4]
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "You are planning to develop a web shop using your existing procurement system with the Punch Out feature. Which of the following functions of this feature are supported out of the box?",
  options: [
    "Buyers can place the order with the pricing information from the existing procurement system instead of from the supplier site.",
    "Buyers can save the cart as a requisition in the buyer’s procurement system awaiting approval.",
    "Only communication with SAP Ariba is supported.",
    "cXML communication behind-the-scenes is supported."
  ],
  // Đúng: lưu cart thành requisition trong hệ thống mua sắm + hỗ trợ giao tiếp cXML
  correctAnswers: [1, 3] 
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "Your site specializes in selling dress shirts. Customers need to pick a shirt’s size, color, and fabric. You don’t expect to offer them additional criteria to select the item they wish to purchase. What commerce feature would be suitable and provide the best performance for your webstore?",
  options: [
    "Nested category structure",
    "Multi-dimensional product variants",
    "Simple product variants",
    "Classification attributes"
  ],
  correctAnswers: [2] 
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question: "How does SAP Commerce Cloud arrange its product and category data?",
  options: [
    "Each product must be associated with at least one category.",
    "There must be one root category in one product catalog.",
    "Categories can contain either other categories or products, but not both.",
    "The product catalog can contain more than one category with the same code attribute value."
  ],
  // Do mỗi catalog có nhiều catalog version, và cùng một code category
  // có thể tồn tại ở nhiều version khác nhau của cùng catalog.
  correctAnswers: [3] // D
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question: "How do you add a property to a set of products?",
  options: [
    "Move the set of products that need this property to a new catalog version",
    "Implement a sub-type of the product item type and include the new property",
    "Define a new facet and include the new property",
    "Create a new classification category and feature, and assign it to a catalog category"
  ],
  correctAnswers: [1, 3] // B, D
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "A Credit Limit defines the maximum amount of credit assigned to a B2B unit, and if an order exceeds the credit limit, the account manager of the B2B unit needs to approve it. What should you pay attention to when you are managing a credit limit?",
  options: [
    "A date range must be defined, either as a range with start and end date (e.g. 01 Jan – 30 June) or periodic (e.g. weekly), or both (weekly from 01 Jan – 30 June).",
    "An alert threshold (as either percentage value, e.g. 80%, or absolute value in currency, e.g. 4,000 USD) must be defined.",
    "A threshold value must be defined in a given currency (5,000 USD, for example).",
    "One or more B2B units can be assigned to the same credit limit (e.g. Store East and Store West use the same weekly credit limit)."
  ],
  correctAnswers: [2,3] 
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "What are the differences between boost rules and promoting items?",
  options: [
    "Boost rules are attribute-focused while promoted items are product-focused.",
    "Boost rules are defined globally while promoted items are category aware.",
    "Promoting an item prioritizes it more than the boost rules do.",
    "Boosting an item prioritizes it more than promoting an item does."
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "You are creating a base store for your online shop. Which of the following principles should you consider during the set-up?",
  options: [
    "One base store can be associated with only one point of service.",
    "One base store can be associated with more than one content catalog.",
    "One base store can be associated with more than one CMS site.",
    "One base store can be associated with more than one product catalog."
  ],
  // Đúng: 1 base store có thể gắn nhiều CMS site và nhiều product catalog
  correctAnswers: [2, 3] // C, D
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "Which features are exclusively supported by the Business-to-Business (B2B) Commerce Module?",
  options: [
    "Product search",
    "Organization management",
    "Order approval processes",
    "Bundle promotions"
  ],
  correctAnswers: [1, 2] // B, C
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "You are using Microsoft Excel to export product data directly from the Backoffice Product Cockpit. Which of the following options are available to you?",
  options: [
    "Common classification attributes (that belong to the selected products) can be exported directly.",
    "You can deselect any attribute in the list of the to-be-exported attributes.",
    "You can select the attributes one-by-one and add them into the list of the to-be-exported attributes.",
    "Classification attributes that only belong to some selected products can also be exported, if they are selected."
  ],
  correctAnswers: [0, 1] 
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "SAP Commerce Cloud is currently released monthly. What do you need to pay attention to when working with monthly updates?",
  options: [
    "Every monthly update will be supported for 12 months.",
    "A monthly update can contain bug fixes, security/compliance updates and new features.",
    "Customers must always be using a supported update to stay current.",
    "New features in a monthly update are enabled by default but can be deactivated."
  ],

  correctAnswers: [1,2] // B, C
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "What can you do with SmartEdit?",
  options: [
    "Modify navigation nodes",
    "Clone slots in a web page",
    "Clone web pages",
    "Add new slots to a web page"
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "You are using the Integration API module. What can you use the Integration UI Tool in Backoffice for?",
  options: [
    "Manage the structure of the integration objects",
    "Reload the Integration API engine to make the changes effective",
    "Change the EDMX data in the EDMX editor directly for simple integration requirement",
    "Monitor the inbound or outbound integration object requests"
  ],
  // A: dùng để quản lý cấu trúc integration objects
  // D: dùng để theo dõi (monitor) các yêu cầu inbound/outbound
  correctAnswers: [0, 3]
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "Which of the following SAP Commerce Cloud features support Global Data Protection Regulation (GDPR) out of the box?",
  options: [
    "Personal data reporting",
    "Breach notification",
    "Data retention or deletion",
    "Consent management",
    "Order tracking"
  ],
  correctAnswers: [0, 2, 3] // A, C, D
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "How can you use a multi-code coupon item out of the box?",
  options: [
    "Assign it as a condition for a promotion",
    "Reactivate a redeemed coupon code when the related order is canceled",
    "Use it as a free gift of a promotion",
    "Limit each user to use no more than 3 coupon codes of the same coupon item"
  ],
  // Đúng: dùng làm điều kiện của promotion + giới hạn số coupon/coupon item cho mỗi user
  correctAnswers: [0, 3]
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "Which Webhooks features are supported out of the box in SAP Commerce Cloud?",
  options: [
    "Applying filters to send only approved products via a webhook",
    "Sending notifications to a configured destination when an order is created, loaded, or updated",
    "Configuring a webhook at runtime without requiring a server restart",
    "Creating a webhook with an Outbound Sync configuration"
  ],
  correctAnswers: [0, 2] // A, C
},
{
  category: "C_C4H32_2411 – Integrations",
  question:
    "Which features are supported out of the box by the Cloud Hot Folders module?",
  options: [
    "Automatic creation of a hot folder in Microsoft Azure Blob Storage",
    "Easy access to storage connection credentials stored in configuration properties",
    "Synchronous integration mechanism to safely import batches of data",
    "End-to-end processes monitoring in Backoffice"
  ],
  correctAnswers: [0, 3] // A, D
},
{
  category: "C_C4H32_2411 – Web Content Management",
  question: "What can you do with the Preview Mode in SmartEdit?",
  options: [
    "Synchronize the catalog with the online version",
    "Navigate to the page to be edited",
    "Edit some basic properties of a page if you have special permissions",
    "Display the staged version content catalog in different languages, dates and times"
  ],
  correctAnswers: [1, 3] // B, D
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "In SAP Commerce Cloud (in the public cloud), Autoscaling is an included feature. What does this feature support?",
  options: [
    "It adjusts the number of replicas to meet increased resource demand.",
    "It is enabled by default for staging and production environments.",
    "It is enabled by default for the production environment.",
    "It adjusts infrastructure resources such as DTUs or database disk size to match demand."
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "By default, where can you configure sourcing when using the Order Management Services Module in SAP Commerce Cloud?",
  options: [
    "In local.properties or project.properties of your custom extensions",
    "In the Backoffice Administration Cockpit",
    "In the Assisted Service Mode",
    "In the Backoffice Order Fulfillment Cockpit"
  ],
  correctAnswers: [3] // D
},
{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "You are administering the validation framework. What can you use the Backoffice Administration Cockpit for?",
  options: [
    "Reload the validation engine",
    "Create a new constraint type",
    "Create a constraint method",
    "View all constraints in the system"
  ],
  correctAnswers: [0, 3] // A, D
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "You are creating a customization in SmartEdit. What can you use this for?",
  options: [
    "Synchronize modified Web site content to the online version",
    "Generate scaled images to support the responsive storefront",
    "Personalize the appearance of a page based on user segments",
    "Activate a promotion based on user segments"
  ],
  // SmartEdit Customizations (Personalization):
  // - dùng để cá nhân hóa nội dung/trình bày trang theo user segment
  // - có thể kích hoạt hành vi kinh doanh (ví dụ promotion) dựa trên segment
  correctAnswers: [2, 3] // C, D
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question: "What are the limits of a temporary license?",
  options: [
    "It initially allows 30 days of use for the software.",
    "It can be extended for another 30 days.",
    "It can be used for test and demonstration purposes.",
    "It initially allows 90 days of use for the software."
  ],
  correctAnswers: [2, 3] // A, B
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "You want to display a product carousel on your storefront that can only be viewed by members of a specific user group. Which SAP Commerce Cloud user interface do you use to do this?",
  options: [
    "Backoffice Adaptive Search perspective",
    "SmartEdit Basic Edit perspective",
    "Backoffice Product Cockpit",
    "SmartEdit Personalization perspective"
  ],
  // Basic Edit: thêm/chỉnh component (product carousel)
  // Personalization: giới hạn hiển thị theo user group
  correctAnswers: [1, 3] // B, D
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "Which of these SAP CX solutions can a company use to have a holistic view of their customers’ activities—such as adding items into the shopping cart—on an SAP Commerce Cloud storefront?",
  options: [
    "Intelligent Selling Services for SAP Commerce Cloud",
    "SAP Emarsys",
    "SAP Customer Data Cloud",
    "SAP Service Cloud"
  ],
  // Emarsys: theo dõi & phân tích hành vi khách hàng (cart, browsing, engagement)
  correctAnswers: [1]
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "How can you create new CMS components in SmartEdit to display them in the storefront?",
  options: [
    "Add a shared component to a page template",
    "Add a new component to a page template content slot",
    "Add a new component to a page content slot",
    "Add a new slot to a page, then add a new component to this slot"
  ],
  // Tạo component mới trong SmartEdit bằng cách thêm component vào slot:
  // - slot của page template
  // - slot của page
  correctAnswers: [1, 2] // B, C
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "In SmartEdit, which of the following objects can you perform synchronization on?",
  options: [
    "A content slot",
    "A page template",
    "A page",
    "A CMS restriction",
    "A CMS Component"
  ],
  // Trong SmartEdit, có thể sync trực tiếp:
  // - Page
  // - CMS Component
  // - Content Slot
  correctAnswers: [0, 2, 4] // A, C, E
},

{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "In the context of Fraud Detection, which of the following Symptoms are supported out of the box in SAP Commerce Cloud?",
  options: [
    "Proper Authorization Symptom",
    "First Time Order Symptom",
    "Unusual Behavior Symptom",
    "Different Addresses Symptom"
  ],
  correctAnswers: [1, 3] // B, D
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "Intelligent Selling Services for SAP Commerce Cloud (ISS) allows you to show the most relevant products to visitors at the right point in their shopping journey using product recommendations. Which of the following ISS product recommendations are based on deep learning or machine learning?",
  options: [
    "Recently viewed products",
    "Related products",
    "Trending products",
    "Personalized products"
  ],
  correctAnswers: [2, 3] 
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "Without needing to restart the server, how would you let customers select different colors, capacities, and form factors when purchasing a hard drive? Which product modeling approach should you choose?",
  options: [
    "Classification system",
    "Multi-dimensional product variants",
    "Basic product variants",
    "Type system"
  ],
  correctAnswers: [1] 
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "You are going to develop a storefront using SAP Commerce Cloud, composable storefront. What should you pay attention to?",
  options: [
    "Configure the SAP Commerce Cloud, composable storefront client-side app to process JSP content.",
    "Leverage the existing WCMS structure on the server side.",
    "The composable storefront client-side app needs to explicitly invoke SAP Commerce Cloud facades.",
    "The composable storefront client-side app can communicate with SAP Commerce Cloud using the Commerce REST API."
  ],
  correctAnswers: [1, 3] // B, D
},

{
  category: "C_C4H32_2411 – Product Content Management",
  question:
    "Which tasks would require the participation of a software developer?",
  options: [
    "Modifying the type system to add a “density” property to existing products",
    "Adding a “density” descriptive field to existing products without restarting the production server",
    "Adding the ability for customers to pick from different fabrics for products that use multi-dimensional product variants",
    "Adding the ability for customers to pick from among different fabrics for product that use simple product variants"
  ],
  // Cần developer khi phải thay đổi type system hoặc mô hình simple variants
  correctAnswers: [0, 3] // A, D
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question:
    "Which restriction types are available out of the box for page components?",
  options: [
    "Country Restriction",
    "Time Restriction",
    "Category Restriction",
    "Regex Restriction",
    "Usergroup Restriction"
  ],
  correctAnswers: [1,2,4] // A, B, E
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "What are the key modules and functionalities of Intelligent Selling Services for SAP Commerce Cloud?",
  options: [
    "Foundation module to collect customer behavior data",
    "Customer Recovery module to bring customers back based on abandoned shopping carts or browser sessions",
    "Recommendation module to provide product recommendations based on machine learning or custom configuration",
    "Test and Reporting module to provide test and report functionality for comparing and validating merchandising efforts",
    "Segmentation module to associate customers to custom segments or user groups in SAP Commerce Cloud"
  ],
  correctAnswers: [0, 2, 4] 
},

{
  category: "C_C4H32_2411 – Web Content Management",
  question: "What can you do in the Basic Edit mode of SmartEdit?",
  options: [
    "Add or edit component restrictions",
    "Synchronize a page or a component in a page",
    "Save or recall a version",
    "Move components within a page",
    "Add components to a page"
  ],
  // Basic Edit: thao tác nội dung trên page + sync; không bao gồm versioning hay restriction editing (Advanced/Personalization)
  correctAnswers: [1, 3, 4] // B, D, E
},

{
  category: "C_C4H32_2411 – Integrations",
  question:
    "The SAP Commerce Cloud, Integration Extension Pack provides out-of-the-box support to integrate other SAP solutions. Which of the following solutions are included?",
  options: [
    "SAP S/4HANA Service",
    "SAP Central Finance",
    "SAP Ariba",
    "SAP Variant Configuration and Pricing"
  ],
  correctAnswers: [0, 3] // A, D
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "As a non-administrative backend user, what can you do in Backoffice out of the box?",
  options: [
    "Change the language of the Backoffice UI",
    "Switch to another user role, if available",
    "Change your password",
    "Give feedback to the company’s IT/admin team regarding Backoffice issues",
    "Choose a different pre-defined theme or create a custom theme"
  ],
  // OOTB user settings: đổi ngôn ngữ, chuyển role (nếu được gán), đổi mật khẩu
  correctAnswers: [0, 1, 2] // A, B, C
},

{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "Which area in the user interface can you use to resolve a customer complaint ticket?",
  options: [
    "Feedback Icon at the top right of the Backoffice page",
    "Backoffice Customer Support Cockpit",
    "Backoffice Collaboration Center",
    "On the storefront using the Assisted Service Module"
  ],
  correctAnswers: [1] // B
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "You are setting up B2B permissions for evaluation during the order approval process (on the buyer side). Which of the following scenarios are covered by B2B permission types available out of the box in SAP Commerce Cloud?",
  options: [
    "A user exceeds the maximum currency amount per order (B2BOrderThresholdPermission).",
    "A user applies for Cost Center access authorization (B2BAuthorizedCostCenterPermission).",
    "A user exceeds the maximum number of orders per day, week, and so on (B2BOrderNumberTimespanPermission).",
    "A user exceeds their Cost Center’s budget(s) (B2BBudgetExceededPermission)."
  ],

  correctAnswers: [0, 3] 
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "Which features are provided by the Backoffice Visual Workflow Template Designer?",
  options: [
    "Arrange the position of nodes/edges for visualizing workflow templates and instances",
    "Drag & Drop items to trigger workflows with workflow templates",
    "Create new workflow templates",
    "Abort running workflows"
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Essential Foundations",
  question:
    "What can you do with the Collaboration Center in Backoffice?",
  options: [
    "Assign a user to the Visible for Principal group",
    "Work on a specific task assigned by a workflow",
    "Monitor a workflow by seeing the finished and current steps",
    "Start a workflow by dropping items into the collaboration center",
    "Create a new workflow template"
  ],
  correctAnswers: [1, 2, 3] // B, C, D
},

{
  category: "C_C4H32_2411 – Commerce",
  question: "What do you need to know about search profiles?",
  options: [
    "Search profiles are catalog aware.",
    "A single search profile can have different configurations.",
    "A search profile can contain only one boost rule.",
    "Search profiles can be configured in SmartEdit."
  ],
  correctAnswers: [0, 1] // A, B
},

{
  category: "C_C4H32_2411 – Order Management and Customer Support",
  question:
    "You are configuring sourcing in the Order Management Services module of SAP Commerce Cloud. What weight factors can you configure?",
  options: [
    "Delivery Time",
    "Allocation",
    "Distance",
    "Status"
  ],
  correctAnswers: [0, 2] // A, C
},

{
  category: "C_C4H32_2411 – Commerce",
  question:
    "You want to create a new search profile. Which functions are available out of the box?",
  options: [
    "Promote or exclude individual or multiple items",
    "Create new index properties",
    "Create a boost rule for an individual item",
    "Create and define facets"
  ],
  correctAnswers: [0, 2] // A, C
}


























































  

  // add more question
];
