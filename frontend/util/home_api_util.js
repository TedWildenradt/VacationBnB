
export const fetchHomes = (data) => (
  $.ajax({
    method: "GET",
    url: `api/homes`,
    data
  })
)

export const fetchHome = (id) => (
  $.ajax({
    method: "GET",
    url: `api/homes/${id}`
  })
)