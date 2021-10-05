export const collect = async (page) => {
    let data = await (await fetch(`https://blackboxcinema.site/bbox.php?page=${page}`,
                {
                             method: `POST`,
                             headers: {
                                
                                }
                            })).json();
  return (data);
};
