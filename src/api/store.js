function list() {
  var data = localStorage.getItem("stores") || "[]";
  try {
    return JSON.parse(data);
  } catch (error) {
    localStorage.setItem("stores", "[]");
    return [];
  }
}

function add(item) {
  if (Object.getPrototypeOf(item) !== Object.getPrototypeOf({})) {
    return null;
  }
  var data = list();
  if (!item.zid) {
    item.zid = new Date().getTime();
  }
  data.push(item);
  localStorage.setItem("stores", JSON.stringify(data));
  return item;
}

function edit(zid, item) {
  if (Object.getPrototypeOf(item) !== Object.getPrototypeOf({})) {
    return null;
  }

  let data = list();
  let index = data.findIndex((i) => i.zid === zid);
  if (index === -1) {
    return null;
  }
  data[index] = { ...data[index], ...item };
  localStorage.setItem("stores", JSON.stringify(data));

  return data[index];
}

function remove(zid) {
  let data = list();
  data = data.filter((i) => i.zid !== zid);
  localStorage.setItem("stores", JSON.stringify(data));

  return true;
}

export default {
  list,
  add,
  edit,
  remove,
};
