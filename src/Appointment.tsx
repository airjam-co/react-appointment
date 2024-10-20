import React, { useEffect, useState } from 'react';

import { Props } from './Props';
import { Calendar } from '@airjam/react-calendar';
export { CalendarViewType as ViewType } from '@airjam/types';

export const Appointment = ({
  id,
  resourceId,
  authToken,
  host,
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

  // TODO: use your own viewAs

  return <div className='airjam-appointment-view'>
    <Calendar id={id} resourceId={resourceId} authToken={authToken} host={host} renderEventFunc={renderEventFunc} renderResourceFunc={renderResourceFunc} renderEventReservationFunc={renderEventReservationFunc}
    viewAs={viewAs} showDate={showDate} showEndDate={showEndDate} locale={locale} location={location} latitude={latitude} longitude={longitude} page={page}
    customFilters={customFilters} priceMin={priceMin} priceMax={priceMax} maxDistance={maxDistance} minDistance={minDistance} paginationStyle={paginationStyle}
    resultsPerPage={resultsPerPage}reservationStatusFilter={reservationStatusFilter} descriptionLength={descriptionLength} onResourceSelected={onResourceSelected}
    googleMapsApiKey={googleMapsApiKey} bookingDefaultEmail={bookingDefaultEmail} bookingDefaultName={bookingDefaultName} defaultMapZoom={defaultMapZoom}
    mapMarkerImageUrl={mapMarkerImageUrl} mapMarkerImageMouseOverUrl={mapMarkerImageMouseOverUrl} mapMarkerImageWidth={mapMarkerImageWidth} mapMarkerImageHeight={mapMarkerImageHeight}
    mapMarkerLabelFunc={mapMarkerLabelFunc} paymentProcessorPublicKey={paymentProcessorPublicKey} renderMapMarkerInfoWindowFunc={renderMapMarkerInfoWindowFunc} />
    </div>
}
