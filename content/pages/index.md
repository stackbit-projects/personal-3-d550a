---
title: Home
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-c
    backgroundWidth: full
    title: >-
      This is the "about" excerpt. It can be used to provide a paragraph about
      yourself that people can read on the homepage to get a sense of who you
      are. There also exists a dedicated about page where you can write more
      about yourself for those who are interested.
    text: >
      This is the "about" excerpt. It can be used to provide a paragraph about
      yourself that people can read on the homepage to get a sense of who you
      are. There also exists a dedicated about page where you can write more
      about yourself for those who are interested.
    actions: []
    styles:
      self:
        height: screen
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-20
          - pb-0
        alignItems: center
        justifyContent: flex-end
        flexDirection: row
        borderWidth: 0
        borderRadius: none
      title:
        fontWeight: 400
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
          - mb-12
      actions:
        justifyContent: flex-start
    type: HeroSection
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
      url: /images/4.jpeg
  - elementId: ''
    colors: colors-c
    backgroundWidth: full
    quote: |-
      “It’s great to see someone taking action while still maintaining a
      sustainable fish supply to home cooks.”
    name: Johnna Doe
    title: Product Marketing Manager at Acme
    backgroundImage:
      url: /images/post-1.jpeg
      altText: Product Marketing Manager Quote
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-36
        alignItems: flex-end
        justifyContent: center
      quote:
        textAlign: right
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: right
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: right
    contentAlignHoriz: right
    contentAlignVert: top
    type: QuoteSection
  - elementId: contact-form
    colors: colors-c
    backgroundWidth: full
    title: Contact us
    text: We look forward to hearing from you.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
    feature:
      type: ImageBlock
      url: /images/contact.png
      altText: Contact form image
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
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
    action: /.netlify/functions/submission_created
    type: ContactSection
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
        style: secondary
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
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: flex-end
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
          - mb-0
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
        margin:
          - mt-5
          - mb-5
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    variant: variant-a
    colors: colors-c
    backgroundWidth: full
    title: What I do
    actions: []
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
    variant: variant-c
    colors: colors-c
    backgroundWidth: full
    title: Latest blog posts
    actions:
      - type: Button
        label: More
        url: /blog
        style: secondary
        altText: More
        showIcon: false
    posts:
      - content/pages/blog/fox-village-in-japan.md
      - content/pages/blog/basic-rules-for-walking-in-the-mountains.md
      - content/pages/blog/nature.md
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
