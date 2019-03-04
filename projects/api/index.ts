import { parse } from 'url';

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const { timeout = 1 } = query || req.params.id;
  setTimeout(() => {
    res.end(`${timeout}`);
  }, timeout * 1000);
};
