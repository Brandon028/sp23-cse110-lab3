---
name: custom issue template
about: "(ssues for those tasks with the appropriate labels and assignee (yourself). "
title: custom issue?
labels: ''
assignees: Brandon028

---

- type: textarea
    id: what-issue
    attributes:
      label: What issue?
      description: what is your issue?
      placeholder: issue?
      value: "write issue here"
    validations:
      required: true
