export const offerService = {
  getPaginatedOffers,
  getOfferById,
  addOffer,
  deleteOffer,
};

import { authHeader } from "../helpers/auth-header";

function getPaginatedOffers(page) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`http://localhost:1323/offers?page=${page}`, requestOptions);
}

function getOfferById(offerId) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`http://localhost:1323/offers/${offerId}`, requestOptions);
}

function addOffer(offerRequest) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ offerRequest }),
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
