
export const fetchHomes = () => (
  $.ajax({
    method: "GET",
    url: `api/homes`
  })
)

export const fetchHome = (id) => (
  $.ajax({
    method: "GET",
    url: `api/homes/${id}`
  })
)