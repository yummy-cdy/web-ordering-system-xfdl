(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMessage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSG_ID","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT_EN","type" : "STRING","size" : "256"},{"id" : "MSG_TYPE","type" : "STRING","size" : "2"},{"id" : "MSG_ICON","type" : "STRING","size" : "256"}]},"Rows" : [{"MSG_ID" : "msg.server.error","MSG_TEXT" : "서버 오류입니다.\\n관리자에게 문의하세요.","MSG_TEXT_EN" : "Server error. Please contact your administrator.","MSG_TYPE" : "A","MSG_ICON" : "ERR"},{"MSG_ID" : "msg.server.error.msg","MSG_TEXT" : "서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}","MSG_TEXT_EN" : "The server received the following error message.s\\n{0}","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.session.timeout","MSG_TEXT" : "세션이 종료되었습니다. 다시 로그인해주세요.","MSG_TEXT_EN" : "Your session has expired, please login again.","MSG_TYPE" : "A","MSG_ICON" : "ERR"},{"MSG_ID" : "msg.login.url.error","MSG_TEXT" : "정상적인 경로로 접속하시기 바랍니다.","MSG_TEXT_EN" : "invalid access! please, login first at www.tobesoft.com","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.login.error","MSG_TEXT" : "해당하는 사용자 정보가 없습니다.","MSG_TEXT_EN" : "No user found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.call.nofile","MSG_TEXT" : "해당하는 메뉴에 Program File이 등록되지 않았습니다.","MSG_TEXT_EN" : "the requested menu does not exist!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.nomenu","MSG_TEXT" : "해당 Menu가 존재하지 않습니다.","MSG_TEXT_EN" : "The specified menu doesn't exist.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "confirm.logout","MSG_TEXT" : "로그아웃 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to log out?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.movepage","MSG_TEXT" : "변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?","MSG_TEXT_EN" : "There are unsaved data. Would you like to leave now?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.search","MSG_TEXT" : "검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "Any unsaved data will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.moveropos","MSG_TEXT" : "해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "If you move the selected row, your changes will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.delete","MSG_TEXT" : "선택된 자료를 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.deletesave","MSG_TEXT" : "선택된 자료를 삭제 후 저장하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete and save?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.noselect","MSG_TEXT" : "{0} 을(를) 선택해 주십시요.","MSG_TEXT_EN" : "Please, select {0}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.search.nodata","MSG_TEXT" : "지정된 조건에 해당하는 항목을 찾을 수 없습니다.","MSG_TEXT_EN" : "No data found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.nodata","MSG_TEXT" : "저장할 데이터가 없습니다.","MSG_TEXT_EN" : "No data to save.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.nochange","MSG_TEXT" : "변경된 내역이 없습니다.","MSG_TEXT_EN" : "No changes found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "confirm.before.save","MSG_TEXT" : "변경된 내역을 저장 하시겠습니까?","MSG_TEXT_EN" : "Would you like to save your changes?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.search.success","MSG_TEXT" : "조회 되었습니다.","MSG_TEXT_EN" : "Successfully ","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.success","MSG_TEXT" : "저장 되었습니다.","MSG_TEXT_EN" : "Successfully saved!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.update.success","MSG_TEXT" : "수정 되었습니다.","MSG_TEXT_EN" : "Successfully updated!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.delete.success","MSG_TEXT" : "삭제 되었습니다.","MSG_TEXT_EN" : "Successfully deleted!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.action.success","MSG_TEXT" : "처리 되었습니다.","MSG_TEXT_EN" : "Successfully processed!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.action.fail","MSG_TEXT" : "프로세스가 실패하였습니다.","MSG_TEXT_EN" : "Failed process!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.updateafter","MSG_TEXT" : "변경된 내역을 저장 후 작업하세요.","MSG_TEXT_EN" : "Please, save your changes first!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.delete.child","MSG_TEXT" : "하위 자료가 있어 삭제할 수 없습니다.","MSG_TEXT_EN" : "the requested deletion could not be performed because dependent data found!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.grid.noselect","MSG_TEXT" : "선택된 항목이 없습니다.","MSG_TEXT_EN" : "No item has been selected!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.before.delete","MSG_TEXT" : "정말로 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.err.validator","MSG_TEXT" : "{0}","MSG_TEXT_EN" : "{0}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.required","MSG_TEXT" : "{0} 은(는) 필수 입력 항목입니다.","MSG_TEXT_EN" : "{0} is a required field.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.length","MSG_TEXT" : "{0} 의 입력값은 {1} 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.rangelength","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} is between {1} and {2}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.maxlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.minlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.maxlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.minlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.digits","MSG_TEXT" : "{0} 은(는) 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.min","MSG_TEXT" : "{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.max","MSG_TEXT" : "{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.date","MSG_TEXT" : "{0} 은(는) 유효하지 않은 날짜 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid date format.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.dateym","MSG_TEXT" : "{0} 은(는) 유효하지 않은 년월 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid year/month format.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.fromto","MSG_TEXT" : "{0} 의 날짜가 {1} 의 날짜보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.comparebig","MSG_TEXT" : "{0} 이(가) {1} 보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.comparesmall","MSG_TEXT" : "{0} 이(가) {1} 보다 큽니다.","MSG_TEXT_EN" : "{0} is greater than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.equalto","MSG_TEXT" : "{0} 이(가) {1} 와(과) 일치하지 않습니다.","MSG_TEXT_EN" : "{0} is not equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.range","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 값입니다.","MSG_TEXT_EN" : "The value of {0} is between {1} and {2}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.declimit","MSG_TEXT" : "{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.","MSG_TEXT_EN" : "The fractional part of {0} must consiste of {1} digits.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.code","MSG_TEXT" : "{0} 은(는) {1} 중 하나의 값이어야 합니다.","MSG_TEXT_EN" : "{0} must be the value of {1}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.ssn","MSG_TEXT" : "{0} 은(는) 올바른 주민번호가 아닙니다.","MSG_TEXT_EN" : "The entered Social Security Number is invalid.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.email","MSG_TEXT" : "e-mail이 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered email address is invalid.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.url","MSG_TEXT" : "웹사이트 주소가 잘못 입력 되었습니다.","MSG_TEXT_EN" : "The entered website address is invalid.","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.validator.phone","MSG_TEXT" : "전화번호가 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered phone number is invalid.","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.validator.multicombo.maxcnt","MSG_TEXT" : "{0}개 이상 선택 할 수 없습니다.","MSG_TEXT_EN" : "You can't select more than {0}","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.maxdate","MSG_TEXT" : "날짜의 입력 가능 범위를 벗어났습니다.","MSG_TEXT_EN" : "Invalid date.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.date.great","MSG_TEXT" : "종료일이 시작일보다 빠릅니다.","MSG_TEXT_EN" : "Invalid date range.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.filesize","MSG_TEXT" : "첨부 파일의 용량은 최고 5MB까지 입니다.","MSG_TEXT_EN" : "Maximum allowed attachment size is 5 MB.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.nofilepath","MSG_TEXT" : "경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.","MSG_TEXT_EN" : "A valid file path must be provided.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.exist.code","MSG_TEXT" : "입력하는 Code ({0})값이 이미 등록되어 있습니다.","MSG_TEXT_EN" : "Code already exsits!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.invalid.filename","MSG_TEXT" : "파일 이름이 정의되지 않았습니다.","MSG_TEXT_EN" : "Please, specify a filename.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.notice.itemcount","MSG_TEXT" : "첨부 파일은 {0}개 이상 등록 할 수 없습니다.","MSG_TEXT_EN" : "Attachments can not be registered in more than {0}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.uploadfail","MSG_TEXT" : "{0}로(으로) 파일업로드 실패 입니다.","MSG_TEXT_EN" : "the file upload is failed because {0}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.nodata","MSG_TEXT" : "해당하는 데이터가 없습니다.","MSG_TEXT_EN" : "No data available.","MSG_TYPE" : "A","MSG_ICON" : "INF"}]});
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1536","864",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("FullFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler

		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
