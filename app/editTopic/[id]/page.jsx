import EditTopicFoam from "@/components/EditTopicFoam"

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const editTopic = async ({ params}) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <div>
      <EditTopicFoam id={id} title={title} description={description} />
      
    </div>
  )
}

export default editTopic

