import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import { fetchCharacterById } from '../../services/api';
import s from './CardDetail.module.scss';
import { Spinner } from '../Spinner';
import type { Item } from '../../models';
import { NavLink, useNavigate, useParams } from 'react-router';

const CardDetail: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [item, setItem] = useState<Item | null>();

  const getCharacterData = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchCharacterById(id);

      setItem(data);
      setLoading(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getCharacterData(id);
    }
  }, [id, getCharacterData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        navigate('/');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navigate]);

  if (loading)
    return (
      <div className="item">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className={s['error-message']} data-testid="error">
        {error}
      </div>
    );

  if (!item) return null;

  return (
    <div className={s['card-detail']} ref={cardRef} data-testid="card-detail">
      <NavLink className={s['close-button']} to={`/`}></NavLink>
      <div className={s['img-wrapper']}>
        <img
          src={item.image}
          alt={`${item.name} avatar`}
          className={s.img}
        ></img>
      </div>
      <div className={`${s.name} ${s.neutral}`}>
        Name: <span className={s['accent']}>{item.name}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Species: <span className={s['accent']}>{item.species}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Status: <span className={s['accent']}>{item.status}</span>
      </div>
      <div className={`${s.species} ${s.neutral}`}>
        Gender: <span className={s['accent']}>{item.gender}</span>
      </div>
    </div>
  );
};

export default CardDetail;
