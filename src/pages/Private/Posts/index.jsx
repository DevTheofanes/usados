import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// import
//   {
//     Container,
//     Content,
//   }
// from './styles';

import { DashboardContainer } from '../../../components/Dashboard';
import { useUser } from '../../../hooks/useUser';
import api from '../../../services/api';
import { DashboardContainerButtons } from '../_Components/ContainerButtons';
import { DashboardContainerTable } from '../_Components/ContainerTable';
import { DashboardItemTable } from '../_Components/ItemTable';

export function DashboardPosts() {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();

  async function loadPosts() {
    try {
      const response = await api.get(`/user/${user.id}/posts`);
      console.log(response.data);
      setPosts(response.data.posts);
    } catch (error) {
      toast.warn('Algo deu errado, tente novamente mais tarde.');
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    if (user) {
      loadPosts();
    }
  }, [user]);

  return (
    <DashboardContainer>
      <DashboardContainerButtons>
        <a href="/perfil/posts">
          Fazer uma publicação
        </a>
      </DashboardContainerButtons>

      <DashboardContainerTable title="post">
        {posts.map((post) => (
          <DashboardItemTable
            key={post.id}
            title="post"
            post={post}
          />
        ))}
      </DashboardContainerTable>
    </DashboardContainer>
  );
}
