package zw.co.hisolutions.documents;

public class SaveResults {
	private Status saveStatus;
	private String resultMessage ;
	
	public SaveResults(Status status, String result)
	{
		saveStatus=status;
		resultMessage=result ;
	}	
	
	public Status getSaveStatus() {
		return saveStatus;
	}
	public String getResultMessage() {
		return resultMessage;
	}
	
	
}
