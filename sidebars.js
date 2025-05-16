// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
      {
      type: 'category',
      label: 'Нэвтрэх ба эрхийн тохиргоо',
      items: ['login/1', 'login/2']
    },
    {
      type: 'category',
      label: 'QR болон холбоос',
      items: ['qr/1']
    },
    {
      type: 'category',
      label: 'Бүтээгдэхүүн ба цэсийн удирдлага',
      items: ['products/1', 'products/2', 'products/3', 'products/4']
    },
    {
      type: 'category',
      label: 'Заал, гал, тогооны удирдлага',
      items: ['kds/1', 'kds/2', 'kds/3', 'kds/4', 'kds/5']
    },
    {
      type: 'category',
      label: 'Захиалга ба ширээ',
      items: ['order/1', 'order/2', 'order/3', 'order/4', 'order/5']
    },
    {
      type: 'category',
      label: 'Касс ба төлбөр',
      items: ['pos/1', 'pos/2', 'pos/3', 'pos/4']
    },
    {
      type: 'category',
      label: 'Тайлан ба гүйлгээ',
      items: ['report-and-transaction/1', 'report-and-transaction/2', 'report-and-transaction/3', 'report-and-transaction/4']
    },
    {
      type: 'category',
      label: 'Санал хүсэлт',
      items: ['feedback/1', 'feedback/2']
    }
  ]
};

export default sidebars;
