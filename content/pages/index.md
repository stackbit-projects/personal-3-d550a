---
title: Home
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-e
    backgroundWidth: inset
    quote: |
      # Art direction & photography 
    name: I'm Joe. I've been I help brand shine through my lens
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-36
          - pb-12
        alignItems: flex-start
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
    type: QuoteSection
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
      url: /images/photo-1491308056676-205b7c9a7dc1 (1).jpeg
  - elementId: contact-form
    colors: colors-e
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
    variant: variant-a
    colors: colors-a
    backgroundWidth: full
    title: Services
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
        justifyContent: flex-end
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
    colors: colors-c
    backgroundWidth: full
    backgroundImage:
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: >-
      This journey starts no where, but for me, that's the best start we could
      wish for
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
        height: screen
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: flex-start
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
    variant: variant-c
    colors: colors-f
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
