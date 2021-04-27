export const toGlobalId = (type: string, id: number) => {
  return `${type}:${id}`;
};

export const fromGlobalId = (id: string) => {
  return { id: parseInt(id.split(":")[1]), type: id.split(":")[0] };
};
