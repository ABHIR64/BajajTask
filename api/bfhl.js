export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.data || [];

    const odd_numbers = data.filter(x => /^\d+$/.test(x) && parseInt(x) % 2 !== 0).map(Number);
    const even_numbers = data.filter(x => /^\d+$/.test(x) && parseInt(x) % 2 === 0).map(Number);
    const alphabets = data.filter(x => /^[a-zA-Z]$/.test(x)).map(x => x.toUpperCase());
    const special_characters = data.filter(x => !/^[a-zA-Z0-9]+$/.test(x));
    const sum = odd_numbers.concat(even_numbers).reduce((a, b) => a + b, 0);
    const concat_string = alphabets.join("");

    return res.status(200).json({
      is_success: true,
      user_id: "abhir_bansal_19022004",
      email: "abhir.bansal2022@vitstudent.ac.in",
      roll_number: "22BCE0418",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum,
      concat_string,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
