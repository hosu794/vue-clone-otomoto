export const offerService = {
  getPaginatedOffers,
  getOfferById,
  addOffer,
  deleteOffer,
  uploadFile,
  getPaginatedOffersWithParamFilter,
};

import { authHeader, authHeaderUploadFile } from "../helpers/auth-header";

function getPaginatedOffers(page) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`http://localhost:1323/offers?page=${page - 1}`, requestOptions);
}

function getOfferById(offerId) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`http://localhost:1323/offers/${offerId}`, requestOptions);
}

function addOffer({
  type,
  from,
  brand,
  model,
  generation,
  mileage,
  capacity,
  fuel,
  power,
  transmission,
  drive,
  vin,
  bodyType,
  doorCount,
  color,
  colorType,
  country,
  vat,
  firstregistration,
  notCrashed,
  conditionalCar,
  leasing,
  price,
  phone,
}) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({
      type,
      from,
      brand,
      model,
      generation,
      mileage,
      capacity,
      fuel,
      power,
      transmission,
      drive,
      vin,
      bodyType,
      doorCount,
      color,
      colorType,
      country,
      vat,
      firstregistration,
      notCrashed,
      conditionalCar,
      leasing,
      price,
      phone,
    }),
  };

  return fetch("http://localhost:1323/offer", requestOptions);
}

function deleteOffer(offerId) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`http://localhost:1323/offers/${offerId}`, requestOptions);
}

function uploadFile(file, offerId) {
  const formData = new FormData();

  formData.append("file", file, file.name);

  const requestOptions = {
    method: "POST",
    headers: authHeaderUploadFile(),
    body: formData,
  };

  return fetch(
    `http://localhost:1323/offer/upload/image/${offerId}`,
    requestOptions
  );
}

function getPaginatedOffersWithParamFilter(params) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `http://localhost:1323/offers/filter?` + new URLSearchParams(params),
    requestOptions
  );
}
