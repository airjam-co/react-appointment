import React, { useEffect, useState } from 'react';

import { Props } from './Props';
import { Calendar } from '@airjam/react-calendar';
import { AppointmentViewType, CalendarViewType, CssTheme } from '@airjam/types';
export { AppointmentViewType as ViewType } from '@airjam/types';
export { CssTheme } from '@airjam/types';

export const Appointment = ({
  id,
  resourceId,
  authToken,
  host,
  cssTheme,
  renderEventFunc,
  renderResourceFunc,
  renderEventReservationFunc,
  viewAs,
  showDate,
  showEndDate,
  locale,
  location,
  latitude,
  longitude,
  page,
  customFilters,
  priceMin,
  priceMax,
  maxDistance,
  minDistance,
  paginationStyle,
  resultsPerPage,
  reservationStatusFilter,
  descriptionLength,
  onResourceSelected,
  googleMapsApiKey,
  bookingDefaultEmail,
  bookingDefaultName,
  defaultMapZoom,
  mapMarkerImageUrl,
  mapMarkerImageMouseOverUrl,
  mapMarkerImageWidth,
  mapMarkerImageHeight,
  mapMarkerLabelFunc,
  paymentProcessorPublicKey,
  renderMapMarkerInfoWindowFunc,
}: Props) => {

  useEffect(() => {
  }, [])


  let calendarViewAs = CalendarViewType.List;
  switch(viewAs) {
    case AppointmentViewType.CalendarBook:
      calendarViewAs = CalendarViewType.CalendarBook;
      break;
    case AppointmentViewType.DayBook:
      calendarViewAs = CalendarViewType.DayList;
      break;
  }
  let styleTheme = CssTheme.Bootstrap;
  if (cssTheme) {
    styleTheme = cssTheme;
  }

  return <div className='airjam-appointment-view'>
    <Calendar id={id} resourceId={resourceId} authToken={authToken} host={host} renderEventFunc={renderEventFunc} renderResourceFunc={renderResourceFunc} renderEventReservationFunc={renderEventReservationFunc}
    viewAs={calendarViewAs} showDate={showDate} showEndDate={showEndDate} locale={locale} location={location} latitude={latitude} longitude={longitude} page={page} cssTheme={styleTheme}
    customFilters={customFilters} priceMin={priceMin} priceMax={priceMax} maxDistance={maxDistance} minDistance={minDistance} paginationStyle={paginationStyle}
    resultsPerPage={resultsPerPage}reservationStatusFilter={reservationStatusFilter} descriptionLength={descriptionLength} onResourceSelected={onResourceSelected}
    googleMapsApiKey={googleMapsApiKey} bookingDefaultEmail={bookingDefaultEmail} bookingDefaultName={bookingDefaultName} defaultMapZoom={defaultMapZoom}
    mapMarkerImageUrl={mapMarkerImageUrl} mapMarkerImageMouseOverUrl={mapMarkerImageMouseOverUrl} mapMarkerImageWidth={mapMarkerImageWidth} mapMarkerImageHeight={mapMarkerImageHeight}
    mapMarkerLabelFunc={mapMarkerLabelFunc} paymentProcessorPublicKey={paymentProcessorPublicKey} renderMapMarkerInfoWindowFunc={renderMapMarkerInfoWindowFunc} />
    </div>
}
