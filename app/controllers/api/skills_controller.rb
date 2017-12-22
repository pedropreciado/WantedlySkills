class Api::SkillsController < ApplicationController
  def new
  end

  def index
    @skills = current_user.skills

  end

  def show
    @skill = Skill.find(params[:id])
  end

  def create
    @skill = Skill.new(skill_params)
    if @skill.save
      render :index
    else
      render json: @skill.errors.full_messages, status: 422
    end
  end

  def edit
    render :edit
  end

  def update
  end

  def destroy
    @skill = current_user.skills.find(params[:id])
    if @skill.destroy!
      render :show
    else
      render json: @skill.errors.full_messages
    end
  end

  def skill_params
    params.require(:skill).permit(:name, :user_id)
  end

end
