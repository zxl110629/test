package dm.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.hibernate.type.IntegerType;
import org.hibernate.type.LongType;
import org.springframework.cache.annotation.Cacheable;

public class BaseDao <T extends Serializable>{
	
	protected Class<Object> tclass;
	
	@Resource
	protected SessionFactory session;

	public BaseDao(){
		
        //返回表示此 Class 所表示的实体（类、接口、基本类型或 void）的直接超类的 Type。  
        Type genType = this.getClass().getGenericSuperclass();  
  
        if (!(genType instanceof ParameterizedType)) {  
        	tclass = Object.class;  
        }  
        //返回表示此类型实际类型参数的 Type 对象的数组。  
        Type[] params = ((ParameterizedType) genType).getActualTypeArguments();  
  
        if ( 0 >= params.length ) {  
        	tclass = Object.class;  
        }  
        if (!(params[0] instanceof Class)) {  
        	tclass = Object.class;  
        }  
  
        tclass = (Class) params[0];
	}
	
	//@Cacheable(value="dm.entity.BASE_GYQY")
	public List<T> queryAll(){
		String hql = "FROM " + tclass.getName()  ;
	    Query q = session.getCurrentSession().createQuery(hql);
		return q.setCacheable(true).setCacheRegion(tclass.getName()).list();
	}
	

	public List<T> queryAllByWhere(String where){
		String hql = "FROM " + tclass.getName() +where;
	    Query q = session.getCurrentSession().createQuery(hql);
		return (List<T>)q.list();
	}
	
	public Long querySeqNextval(String seqencesname){
		String sql = "SELECT "+seqencesname+".nextval nextvalue FROM dual";
		Session _session = session.getCurrentSession();
	    SQLQuery sque = _session.createSQLQuery(sql);
	    sque = sque.addScalar("nextvalue", LongType.INSTANCE);

	    Long maxId = (Long)sque.uniqueResult();
		return maxId;
	}
	
	public int executeSQL_ExceptQuery(String sql)
	{
		Session _session = session.getCurrentSession();
	    SQLQuery sque = _session.createSQLQuery(sql);
	    return sque.executeUpdate();

	}
	
	public List sqlQuery(String sql)
	{
		Session _session = session.getCurrentSession();
	   SQLQuery sque = _session.createSQLQuery(sql);
	    return sque.list();

	}
	public List sqlQuery_start(Integer start,Integer length,String sql)
	{
		Session _session = session.getCurrentSession();
	   SQLQuery sque = _session.createSQLQuery(sql);
	    sque.setFirstResult(start);
	    sque.setMaxResults(length);
	    return sque.list();

	}

	public List sqlQuery_map(String sql)
	{
		Session _session = session.getCurrentSession();
	    Query sque = _session.createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
	    return sque.list();

	}
	
	public List sqlQuery_start_map(Integer start,Integer length,String sql)
	{
		Session _session = session.getCurrentSession();
	    Query sque = _session.createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
	    sque.setFirstResult(start);
	    sque.setMaxResults(length);
	    return sque.list();

	}
	
	public List queryTableColumnsName(String sql)
	{
		Session _session = session.getCurrentSession();
		SQLQuery sque = _session.createSQLQuery(sql);
	    return sque.list();
	}
	
	private static int pageSize=10;
	public List<T> queryInPage(Integer pageIndex){
		String hql = "FROM " + tclass.getName()  ;
	    Query q = session.getCurrentSession().createQuery(hql);
	    q.setFirstResult((pageIndex-1)*pageSize);
	    q.setMaxResults(pageSize);
	    
		return (List<T>)q.list();//session.getCurrentSession().createQuery(hql).list();
	}
	
	public List<T> queryStart_Length(Integer start,Integer length,String where){
		String hql = "FROM " + tclass.getName() + where ;
	    Query q = session.getCurrentSession().createQuery(hql);
	    q.setFirstResult(start);
	    q.setMaxResults(length);
		return (List<T>)q.list();//session.getCurrentSession().createQuery(hql).list();
	}
	
	public List<T> queryByWhereInPage(Integer pageIndex,String where){
		String hql = "FROM " + tclass.getName() + where  ;
	    Query q = session.getCurrentSession().createQuery(hql);
	    q.setFirstResult((pageIndex-1)*pageSize);
	    q.setMaxResults(pageSize);	    
		return (List<T>)q.list();//session.getCurrentSession().createQuery(hql).list();
	}
	
	public String add(T entity){
		return (String)session.getCurrentSession().save(entity);
	}
	

	public void update(T entity){
		session.getCurrentSession().update(entity);
	}
	
	public String del(String id){
		String success="false";
		try
		{
			Session s = session.getCurrentSession();
			Object t = s.get(tclass, id);
			if( t != null ){
				s.delete(t);
				success = "true";
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			success = "false";
		}
		return success;
	}
	
	public T query(String id){
		return (T)session.getCurrentSession().get(tclass, id);
	}
	
	public Query createQuery(String query,Object... params){
		Query q = session.getCurrentSession().createQuery(query);
		if( params != null ){
			for( int i =0,len = params.length ; i < len ; i ++ ){
				q.setParameter(i + 1, params[i]);
			}
		}
			
		return q;
	}
	
	public Query createSqlQuery(String query,Object... params){
		Query q = session.getCurrentSession().createSQLQuery(query);
		if( params != null ){
			for( int i = 0,len = params.length; i < len ; i ++ ){
				q.setParameter(i+1, params[i]);
			}
		}
		return q;
	}
	
	public Class<Object> getSuperClassGenricType(final Class clazz, final int index) {  
        
        //返回表示此 Class 所表示的实体（类、接口、基本类型或 void）的直接超类的 Type。  
        Type genType = clazz.getGenericSuperclass();  
  
        if (!(genType instanceof ParameterizedType)) {  
           return Object.class;  
        }  
        //返回表示此类型实际类型参数的 Type 对象的数组。  
        Type[] params = ((ParameterizedType) genType).getActualTypeArguments();  
  
        if (index >= params.length || index < 0) {  
                     return Object.class;  
        }  
        if (!(params[index] instanceof Class)) {  
              return Object.class;  
        }  
  
        return (Class) params[index];  
    }  
	
	public int queryCount(String where){
		String hql = "SElECT COUNT(*) FROM " + tclass.getName() + where ;
	    Query q = session.getCurrentSession().createQuery(hql);
		return ((Number)q.uniqueResult()).intValue();
	}
	
	public int queryCount_sql(String sql){
	    Query q = session.getCurrentSession().createSQLQuery(sql);
		return ((Number)q.uniqueResult()).intValue();
	}
}
