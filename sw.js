/* eslint-disable no-undef */
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@6.2.4/build/workbox-sw.min.js')

// 预缓存
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: 'v1.0.11'
  }
])
// 动态缓存 cdn资源
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net\/.*$/,
  new workbox.strategies.StaleWhileRevalidate()
)
// 动态缓存 对象存储图片
workbox.routing.registerRoute(
  /^https:\/\/oss\.imcloudapp\.com\/.*$/,
  new workbox.strategies.StaleWhileRevalidate()
)
