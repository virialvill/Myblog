---
pageTitle: Blog
navTitle: Blog
---

## My Blog

{% for post in collections.post %}

<h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
<em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}