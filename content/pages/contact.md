---
title: About us
sections:
  - elementId: ''
    colors: colors-f
    backgroundWidth: full
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: Want to work together?
    subtitle: Art Direction | Photography | Content creation
    text: >-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
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
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
        margin:
          - mt-12
          - mb-12
      text:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: contact-form
    colors: colors-c
    backgroundWidth: inset
    title: Tell me about your needs
    text: |
      I look forward to hearing from you.
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
      url: /images/Fisherwoman.jpeg
      altText: Contact form image
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-36
          - mb-36
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
    quote: |-
      “It’s great to see someone taking action while still maintaining a
      sustainable fish supply to home cooks.”
    name: Johnna Doe
    title: Product Marketing Manager at Acme
    backgroundImage:
      altText: Product Marketing Manager Quote
    styles:
      self:
        height: auto
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
  - elementId: ''
    colors: colors-c
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
    colors: colors-c
    backgroundWidth: full
    backgroundImage:
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    text: >
      As a hobby, John Doe authors the most influential design blog in Sweden
      with over 100,000 page views a month. He lives in Stockholm with his
      beautiful wife and two boys.
    actions: []
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-6
          - pb-32
        alignItems: center
        justifyContent: center
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
      actions:
        justifyContent: flex-start
    type: HeroSection
layout: PageLayout
---
