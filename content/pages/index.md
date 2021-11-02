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
  - elementId: ''
    colors: colors-c
    backgroundWidth: full
    backgroundImage:
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: My passion is...
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Lear more
        url: /
        style: primary
        elementId: hero-main-button
        altText: Lear more
        showIcon: true
        icon: arrowRight
    feature:
      type: ImageBlock
      url: /images/9.jpeg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
        borderColor: border-complementary-alt
        borderWidth: 5
        borderRadius: none
        borderStyle: none
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
        margin:
          - mt-5
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    variant: variant-a
    colors: colors-a
    backgroundWidth: full
    title: Latest news
    subtitle: Featured blog posts section example
    actions:
      - type: Button
        label: View all
        url: /
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - elementId: ''
    variant: variant-a
    colors: colors-a
    backgroundWidth: full
    title: Latest news
    subtitle: Featured blog posts section example
    actions:
      - type: Button
        label: View all
        url: /
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
---
