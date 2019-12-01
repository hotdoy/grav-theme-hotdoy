---
title: Forms
process:
    markdown: true
    twig: true
never_cache_twig: true
form:
    name: demo-form
    classes: ajax-form
    fields:
        -
            name: name
            label: Input
            placeholder: Placeholder
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: email@email.com
            type: email
            validate:
                required: true
        -
            name: date
            type: date
            label: 'Date demo'
        -
            name: checkboxes
            type: checkboxes
            label: Checkboxes
            options:
                great: Great
                super: Super
                wonderful: Wonderful
                doomed: Doomed
        -
            name: textarea
            type: textarea
            label: Textarea
            placeholder: 'Write something nice'
        -
            name: checkbox
            type: checkbox
            label: 'I totally accept the terms or whatever.'
            validate: null
            required: true
        -
            name: radio
            type: radio
            label: 'Make a choice'
            default: choice-1
            options:
                choice-1: 'Choice 1'
                choice-2: 'Choice 2'
        -
            name: selectbox
            type: select
            label: Selectbox
            options:
                option-1: 'Option 1'
                option-2: 'Option 2'
                option-3: 'Option 3'
                option-4: 'Option 4'
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.to }}'
                subject: 'CONTACT - {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ form.value.email }}'
                subject: 'Message received! 👌'
                body: '{% include "emails/demo-confirmation.html.twig" %}'
        -
            save:
                fileprefix: '{{ form.value.name }}'
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            reset: true
        -
            message: 'Thanks for reaching out!.'
---

{% include "forms/form.html.twig" with { form: forms('demo-form') } %}