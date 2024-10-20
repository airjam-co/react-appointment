# react-appointment

> React component for AirJam&#x27;s Appointment component

[![NPM](https://img.shields.io/npm/v/react-appointment.svg)](https://www.npmjs.com/package/react-appointment) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-appointment
```

## Usage

```tsx
import React, { Component } from 'react'

import  { Appointment, ViewType } from '@airjam/react-appointment';
import '@airjam/react-appointment/dist/style.css';

class Example extends Component {
  const id = "some_id"; // create a new appointment component from https://airjam.co/appointment and copy its id and paste it here
  render() {
    return <Appointment id="{id}" viewAs={ViewType.List}/>
  }
}
```

## License

MIT © [mjlee1983](https://github.com/mjlee1983)
