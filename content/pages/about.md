---
title: About us
sections:
  - type: HeroSection
    title: About me
    text: >
      John Doe is a **Senior Art Director from Stockholm** , Sweden. After
      graduating from The College of Visual Arts with a degree in Communication
      Design, he worked for three small graphic design shops where he honed his
      design style and sensibility.


      His work has been recognized by Communication Arts, Print, How, ID, IdN,
      AIGA, Effie, Archive, Graphis, AdFed and Rockport. Graphic Design USA
      named him a person to watch in 2019.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-0
        alignItems: center
        justifyContent: flex-end
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
        margin:
          - mt-12
      actions:
        justifyContent: flex-start
    colors: colors-a
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    feature:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
      url: /images/Screen Shot 2021-11-02 at 2.21.36 PM.png
  - elementId: ''
    colors: colors-a
    backgroundWidth: full
    quote: >
      The world always seems brighter when you’ve just made something that
      wasn’t there before.
    name: NEIL GAIMAN
    backgroundImage: {}
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
    contentAlignHoriz: left
    contentAlignVert: bottom
    type: QuoteSection
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
layout: PageLayout
---
