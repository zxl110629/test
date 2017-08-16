package dm.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import dm.dao.BaseDao;

public abstract class BaseService<T extends Serializable> {

	@Autowired
	private BaseDao<T> dao;
	
	@Transactional(readOnly=true)
	public List<T> queryAll(){
		return dao.queryAll();
	}

	@Transactional(readOnly=true)
	public List<T> queryAllByWhere(String where){
		return dao.queryAllByWhere(where);
	}

	@Transactional(readOnly=true)
	public Long querySeqNextval(String seqencesname){
		return dao.querySeqNextval(seqencesname);
	}

	@Transactional(readOnly=true)
	public int executeSQL_ExceptQuery(String sql){
		return dao.executeSQL_ExceptQuery(sql);
	}

	@Transactional(readOnly=true)
	public List sqlQuery(String sql){
		return dao.sqlQuery(sql);
	}
	
	@Transactional(readOnly=true)
	public List sqlQuery_start(Integer start,Integer length,String sql){
		return dao.sqlQuery_start(start,length,sql);
	}
	
	//以下方法为返回的集合以map类型返回，可以使用key value 方法
	@Transactional(readOnly=true)
	public List sqlQuery_map(String sql){
		return dao.sqlQuery_map(sql);
	}
	@Transactional(readOnly=true)
	public List sqlQuery_start_map(Integer start,Integer length,String sql){
		return dao.sqlQuery_start_map(start,length,sql);
	}
	
	@Transactional(readOnly=true)
	public List queryTableColumnsName(String sql){
		return dao.queryTableColumnsName(sql);
	}
	
	@Transactional(readOnly=true)
	public List<T> queryInPage(Integer pageIndex){
		return dao.queryInPage(pageIndex);
	}
	
	@Transactional(readOnly=true)
	public List<T> queryStart_Length(Integer start,Integer length,String where){
		return dao.queryStart_Length(start,length,where);
	}
	
	@Transactional(readOnly=true)
	public List<T> queryByWhereInPage(Integer pageIndex,String where){
		return dao.queryByWhereInPage(pageIndex,where);
	}
	
	
	@Transactional
	public String add(T entity){
		return  dao.add(entity);
	}

	@Transactional
	public void update(T entity){
		dao.update(entity);
	}
	
	@Transactional
	public String del(String id){
		return dao.del(id);
	}
	
	@Transactional(readOnly=true)
	public T query(String id){
		return dao.query(id);
	}
	
	@Transactional(readOnly=true)
	public int queryCount(String where){
		return dao.queryCount(where);
	}
	
	@Transactional(readOnly=true)
	public int queryCount_sql(String sql){
		return dao.queryCount_sql(sql);
	}
}
