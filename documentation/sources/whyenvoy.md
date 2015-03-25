page_title: Why Envoy
page_description: Why Envoy.
page_keywords: envoy, introduction, documentation, about, technology, understanding

# Why Envoy?

1) Key Management: Using Envoy to manage your API keys and mint your access tokens gives you a couple things; 
first line of defense for unauthorized apps and automatic analytics about what the developer is doing (getting a high 
error rate from one app? reach out to them and help them solve their problem proactively).

2) Basic Security Policies: Once you know the App is allowed to access your API there are some simple security policies 
that should be run on the Envoy layer. Payload enforcement (JSON and XML threat protection, regular expressions to 
block things like SQL injection or other invasive code). You can also set quotas based on the API Key 
(different developers getting different levels of access based on the products you associate with their keys). 
You also want to set spike arrests to keep your API traffic from overwhelming your target server.

3) Response Management: Make sure you strip out unnecessary response headers (cookies, server versions, etc) that aren't
 relevant to the API Contract. No need to tell your app developers about your target architecture, but it's sometimes 
 hard to suppress those headers from application servers. You may also want rules to block unexpected responses from 
 the target server (500 errors that may contain stack traces for example).

4) Caching: The ability to cache responses in  drives a lot of the rest of "where to do it" questions. 
But being able to return a Cached response from Envoy can decrease your latency by hundreds of milliseconds improving 
your transactions per second and your developer/consumer satisfaction. The question now becomes how fine-grained you can 
get your cached response without having to go to the target server.

