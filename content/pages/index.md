---
title: Home
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-c
    backgroundWidth: full
    title: 'Hi, I am John.'
    text: >
      This is the "about" excerpt. It can be used to provide a paragraph about
      yourself that people can read on the homepage to get a sense of who you
      are. There also exists a dedicated about page where you can write more
      about yourself for those who are interested.
    actions:
      - type: Button
        label: Get Started
        url: /
        style: secondary
        elementId: hero-main-button
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-20
          - pb-0
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-10
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin:
          - mt-8
          - mb-8
      text:
        textAlign: left
        margin:
          - mb-10
      actions:
        justifyContent: flex-start
    type: HeroSection
---
