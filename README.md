
# React-appointment ⏰ 🎫

The easiest way to integrate booking and appointment features into your React.js projects in just minutes! AirJam's appointment component comes fully equipped with a backend, so it's ready to use right out of the box. Simply create a new component instance in AirJam's Appointment component console, copy the instance ID, and add it to your `<Appointment id={"your_id"} />` tag—and the feature is ready to go!

AirJam's Appointment component is designed to be cross-platform across a very wide set of platforms and devices, from things like [WordPress](https://wordpress.com/) and [Squarespace](https://www.squarespace.com), to no-code tools such as [Bubble](https://bubble.io/), to frameworks such as [Next.JS](https://nextjs.org/) and [ReactNative](https://reactnative.dev/). AirJam's Appointment component lets you add booking features to websites to web apps to mobile apps at the same time, so you can offer booking features to any platform you operate in without being tied to a single platform. This is a component library for React.JS, and you can find libraries for other platforms from [here](https://airjam.co/appointment). 

**Key features:**
* Seamlessly sync with online calendar services like [Google Calendar](https://calendar.google.com) and Microsoft Outlook to automatically update and manage your availability in real time.
* Allow your users to book for free or pay for booking via Stripe.
* Customize your booking flow by adding custom fields and overriding dialogs to fit your business logic. Easily pass all custom data to your own server or [Xano](https://www.xano.com/) endpoints as needed, so you can trigger your own workflows from booking events. 
* Personalize your branding by customizing email messages using AirJam's email template editor.
* Manage privacy and access control by integrating with authentication providers like [Google Firebase](https://firebase.google.com/), [Clerk](https://clerk.dev/), or your own custom authentication service.
* Set operating hours, manage reservation requests, and much more—all from the intuitive admin console!
* Get internationalization 🌎 done without any coding, straight from the admin console. You can support as many locales as you'd like and override any message strings from the localization panel in the admin console.
* 🌎 Enable internationalization effortlessly, with no coding required, directly from the admin console. Support unlimited locales and easily customize any message strings through the localization panel.


## Why

With just 2 lines of code, you can integrate fully live booking and appointment features into your project! But why stop there? Create both a web app and a mobile app with React Native, ensuring a seamless experience across platforms. Best of all, all features are currently free to use!

## Getting Started

### Setup

Install the package using ```npm``` or ```yarn```.

NPM:
```
npm install @airjam/react-appointment
```

Or yarn
```
yarn add @airjam/react-appointment
```

Then, add following lines to a React code where you would like to enable your appointment feature.

```
  import { Appointment } from  "@airjam/react-appointment";
  ...
  <Appointment id={"your_component_id_here"} />
```

Retrieve the ID of your component instance from the [component console](https://airjam.co/appointments). If you haven't created an instance yet, you can easily set up a new one from the same console.

### Payment processing

AirJam’s appointment component handles payment processing through [Stripe](https://stripe.com/). In future releases, we will also support additional payment processors like [PayPal](paypal.com) and [Venmo](https://venmo.com/). To enable payment processing with Stripe, simply follow these steps:

1.  Navigate to the [API Keys section](https://dashboard.stripe.com/apikeys) in Stripe’s Developer dashboard, and retrieve both your publishable key and secret key from there.
2. Navigate to AirJam's [component console](https://airjam.co/appointments) and select the component you wish to enable payments for. Under the Settings tab in the General section, change the Payment Processor option to Stripe. Once selected, you'll be prompted to enter Stripe’s Secret Key. Input the secret key you noted in step 1 and click 'Update' to save your changes.
3. Add the `paymentProcessorPublicKey` prop to your `<Appointment>` tag, using the publishable key you obtained in step 1.

```
<Appointment id={"your_component_id"} paymentProcessorPublicKey={"stripe_publishable_key"} />
 ```

Once the keys are configured, any appointment dialogs for resources with prices will display payment dialogs to facilitate payment processing.


### Interface options
The Appointment component can be customized to display various booking interface styles. By default, it presents a calendar view that allows users to select a date and choose available times for that day. Below, you'll find instructions on how to change to other interfaces:


#### Calendar book (Default)
Displays a calendar interface for selecting dates, with user's current day (in their browser's timezone) selected by default. This behavior can be overridden by providing the `showDate` prop with the desired date in UTC format.

```
import { Appointment, ViewType } from  "@airjam/react-appointment";

<Appointment id={"your_component_id"} viewAs={ViewType.CalendarBook} showDate={new Date()} />
```

#### List
Displays reservable slots in a list format without any date selectors. You are responsible for controlling the time ranges using the `showDate` and `showEndDate` props. By default, this view shows reservable slots for the current day in the user's local timezone.

```
import { Appointment, ViewType } from  "@airjam/react-appointment";

<Appointment id={"your_component_id"} viewAs={ViewType.ListBook} showDate={new Date(2020,1,1)} showEndDate={new Date(2020,1,3)} />
```


### Custom styling

By default, AirJam uses [Bootstrap](https://getbootstrap.com/) for styling and includes Bootstrap’s CSS files. You can override this behavior and exclude Bootstrap's CSS files by specifying the `theme` prop as follows:

```
import { Appointment, CssTheme } from  "@airjam/react-appointment";
...
<Appointment id={"your_component_id"} ... cssTheme={CssTheme.None} />
```

## Props

| Prop name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                | Default value                                         | Example values                                                                                                                                                                                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id (required) | **String**: Component ID of the appointment component you wish to render. You can find the IDs from the component’s admin console | | 2jdu31a
| cssTheme | **CssTheme**: Specifies which visual styling to apply to the component | `CssTheme.Bootstrap`   | `CssTheme.None` |
| viewAs | **ViewType**: Type of appointment interface to display | `ViewType.CalendarBook` | `ViewType.DayBook` |
| showDate | **Date**: Start timestamp, represented in UTC, to display available booking times. If provided, the component will only show bookable slots that are equal to or later than the specified timestamp |  `Date.Now()` | `new Date(2024,1,1)` |
| showEndDate | **Date**: End timestamp, represented in UTC, to display available booking times. If specified, the component will only show bookable slots that are equal to or earlier than the specified timestamp |  `Date.Now().addDays(1)` | `new Date(2024,1,2)` |
| locale | **String**: Manually specify the locale for displaying messages. If translations for the specified locale are not found in the admin console for the corresponding component, messages will default to the messages for the default locale | en-US | fr-FR |
| paymentProcessorPublicKey | **String**: Public key provided by the selected payment processor. For Stripe, this refers to the publishable key. | none | `pk_#######` |
| bookingDefaultName | **String**: Default name to populate in the Name field on the booking dialog | none| `John Doe` |
| bookingDefaultEmail | **String**: Default email address to populate in the Email field on the booking dialog | none| `john.doe@emailclient.com` |
| authToken | **String**: For components that require authentication to view and/or to book, the `authToken` is the client's authentication token provided by the authentication provider. For Clerk, this is the `jwtKey`, and for Firebase, it is the `idToken`. This field is ignored if the corresponding component does not require authentication to view and/or to book | none | |

## Important notes
* Booking availabilities displayed on the component may not reflect recent changes in the corresponding calendar source made up to 2 minutes ago. This is because AirJam avoids syncing with the calendar source more frequently than every 2 minutes to prevent overloading the data source.
* Payment processors and other third-party services that AirJam connects to may charge their own fees and commissions. AirJam does not manage or endorse these services.

## Enterprise Plans

Enterprise plans will be available shortly, offering features such as workflow triggers for services like [Zapier](https://zapier.com) and [Slack](https://www.slack.com), GDPR compliance, and ML-based dynamic pricing capabilities. [Email us](mailto:contact@airjam.co) if you're interested in accessing these features early or have a feature request!


## Support AirJam

😃 If you like this component, you can help us out for a [couple of beers](https://donorbox.org/support-airjam) 🍺 or give it a star ⭐ 
