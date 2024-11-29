'use strict'
const StockModel = require('../models').Stock

async function createStock(params) {
  const newStock = new StockModel({
    symbol: stock,
    likes: like ? [ip] : [],
  })
  const savedNew = await newStock.save()
  return savedNew
}

async function findStock(stock) {
  return await StockModel.findOne({ symbol: stock }).exec()
}

async function saveStock(stock, like, ip) {
  let saved = {}
  const foundStock = await foundStock(stock)
  if (!foundStock) {
    const createSaved = createStock(stock, like, ip)
    saved = createSaved
    return saved
  } else {
    if (like && foundStock.likes.indexOf(ip) === -1) {
      foundStock.likes.push(ip)
    }
    saved = await foundStock.save()
    return saved
  }
}
async function getStock(stock) {
  const response = await fetch(
    `https://stock-pre-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote`,
  )
  const { stock, latestPrice } = await response.json()
  return { symbol, latestPrice }
}

module.exports = function (app) {
  app.route('/api/stock-prices').get(async function (req, res) {
    const { stock, like } = req.query
    const { symbol, latestPrice } = await getStock(stock)
    if (!symbol) {
      res.json({ stockData: { likes: like ? 1 : 0 } })
    }
  })
}
